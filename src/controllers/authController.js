require('dotenv').config();
const User = require('../models/User');
const VerificationToken = require('../models/VerificationToken');
const bcrypt = require('bcrypt');
const { sendSms } = require('../utils/sendSms');
const jwt = require('jsonwebtoken');
const {
    validateUser,
    validatePasswordResetRequest,
    validateOtp,
    validatePasswordReset } = require('../utils/errorHandler');
const { fogortPasswordTemplate, verifyAccountTemplate } = require("../utils/messages");
const { generateOTP } = require("../utils/helper");

const handleLogin = async (req, res) => {
    const { body } = req;
    const { error } = validateUser(body);
    //if valid, return 400 - Bad request
    if (error) return res.status(400).json({ message: error.details[0].message });

    const foundUser = await User.findOne({ phoneNumber: body?.phoneNumber }).exec();
    if (!foundUser) return res.status(401).json({ message: "Please confirm your phone number!" }); //Unauthorized 
    // evaluate password 
    const match = await bcrypt.compare(body.password, foundUser.password);
    if (match) {
        // create JWTs
        const isVerified = foundUser.isVerified;
        const isAdmin = foundUser.isAdmin;
        const isModel = foundUser.isModel;
        const isClient = foundUser.isClient;

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "userId": foundUser._id,
                    "isVerified": foundUser.isVerified,
                    "isAdmin": foundUser.isAdmin,
                    "isModel": foundUser.isModel,
                    "isClient": foundUser.isClient,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
        );

        await foundUser.save();

        // Send userId username and access token to user
        return res.status(200).json({ isAdmin, isModel, isClient, accessToken, isVerified });

    } else {
        return res.status(401).json({ message: "Please confirm your password" });
    }
}

const handlePasswordResetRequest = async (req, res) => {
    const { body } = req;
    const { error } = validatePasswordResetRequest(body);
    //if valid, return 400 - Bad request
    if (error) return res.status(400).json({ message: error.details[0].message });

    const foundUser = await User.findOne({ phoneNumber: body?.phoneNumber }).exec();
    if (!foundUser) return res.status(401).json({ message: "Please confirm your phone number!" }); //Unauthorized 

    OTP = generateOTP();

    const verificationToken = new VerificationToken({
        owner: foundUser._id,
        token: OTP
    });

    const passwordResetToken = jwt.sign(
        { "phoneNumber": foundUser.phoneNumber, "token": OTP },
        process.env.PASSWORD_RESET_SECRET,
        { expiresIn: '1hr' }
    );

    try {
        foundUser.passwordResetToken = passwordResetToken;
        await foundUser.save();
        await verificationToken.save();

        const phoneNumber = foundUser.phoneNumber;
        const message = fogortPasswordTemplate(OTP);
        const sms = new sendSms({ phoneNumber, message });

        await sms.sendMessage();

        return res.status(200).json({ message: "Check your phone messages a password reset token has been sent" });
    }
    catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const resetPassword = async (req, res) => {
    const { body } = req;
    const { error } = validatePasswordReset(body);
    //if valid, return 400 - Bad request
    if (error) return res.status(400).json({ message: error.details[0].message });
    const foundUser = await User.findOne({ phoneNumber: body?.phoneNumber }).exec();
    if (!foundUser) return res.status(401).json({ message: "Please confirm your phone number!" });
    if (!foundUser.passwordResetToken) return res.status(401).json({ message: "You haven't initiated a password reset your or your token has expired!! Please resend your phone number" });

    const token = await VerificationToken.findOne({ owner: foundUser._id }).exec();
    if (!token) return res.status(404).json({ message: "You haven't initiated a password reset your or your token has expired!! Please resend your phone number" })

    jwt.verify(
        foundUser.passwordResetToken,
        process.env.PASSWORD_RESET_SECRET,
        async (error, decoded) => {
            if (error || foundUser.phoneNumber !== decoded.phoneNumber) return res.status(403).json(({ message: "You haven't initiated a password reset your or your token has expired!! Please resend your phone number" }));
            if (error || body.resetToken !== decoded.token) return res.status(403).json(({ message: "Your password token has expired!! Please resend your phone number" }));
            else {
                try {
                    await VerificationToken.findByIdAndDelete(token._id);
                    const hashedPwd = await bcrypt.hash(body.password, 10);
                    foundUser.password = hashedPwd;
                    foundUser.passwordResetToken = null;

                    await foundUser.save();

                    return res.status(200).json({ message: "Your password has been reset successfully" });
                }
                catch (error) {
                    return res.status(error?.status || 500).json({ message: error?.message || error });
                }
            }

        }
    );
}

const verifyAccount = async (req, res) => {
    const { body } = req;
    const { error } = validateOtp(body);
    //if invalid, return 400 - Bad request
    if (error) return res.status(400).json({ message: error.details[0].message });

    //Getting the user id 
    const foundUser = await User.findOne({ _id: req.userId }).exec();
    if (!foundUser) return res.status(404).json({ message: 'User does not exist!' });

    //Check email verification status
    if (foundUser.isVerified) return res.status(409).json({ message: "This account is already verified" });

    //Getting the token delivery from the input if it is matches with the user
    const token = await VerificationToken.findOne({ owner: foundUser._id }).exec();
    if (!token) return res.status(404).json({ message: 'Otp does not exist!' });;

    //Comparing the token delivered with one in the database
    const isMatched = await token.compareToken(token, body.otp);
    if (!isMatched) return res.status(400).json({ message: "Please provide a valid token" });

    /*
        if all goes well we update the email verication status
        Delete the token
        Send email to the user
    */

    try {
        foundUser.isVerified = true;
        await VerificationToken.findByIdAndDelete(token._id);
        await foundUser.save();

        const isVerified = foundUser.isVerified;
        const isAdmin = foundUser.isAdmin;
        const isModel = foundUser.isModel;
        const isClient = foundUser.isClient;

        const accessToken = jwt.sign(
            {
                "UserInfo": {
                    "userId": foundUser._id,
                    "isVerified": foundUser.isVerified,
                    "isAdmin": foundUser.isAdmin,
                    "isModel": foundUser.isModel,
                    "isClient": foundUser.isClient,
                }
            },
            process.env.ACCESS_TOKEN_SECRET,
        );

        const phoneNumber = foundUser.phoneNumber;
        const message = `Your account has been verified successfully`
        const sms = new sendSms({ phoneNumber, message });

        await sms.sendMessage();

        return res.status(200).json({ message: 'Your account has been verified', isAdmin, isModel, isClient, accessToken, isVerified });
    }
    catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const resendVerificationToken = async (req, res) => {
    //Getting the user id 
    const foundUser = await User.findOne({ _id: req.userId }).exec();
    if (!foundUser) return res.status(404).json({ message: 'User does not exist!' });

    //Check email verification status
    if (foundUser.isVerified) return res.status(409).json({ message: "This account is already verified" });

    //Getting the token delivery from the input if it is matches with the user
    const token = await VerificationToken.findOne({ owner: foundUser._id }).exec();
    if (token) {
        await VerificationToken.findByIdAndDelete(token._id);

        OTP = generateOTP();

        const verificationToken = new VerificationToken({
            owner: foundUser._id,
            token: OTP
        });

        try {
            await verificationToken.save();

            const phoneNumber = foundUser.phoneNumber;
            const message = verifyAccountTemplate(OTP);
            const sms = new sendSms({ phoneNumber, message });

            await sms.sendMessage();

            return res.status(200).json({ message: 'Your OTP has been reset successfully please check your phone messages' });
        }
        catch (error) {
            return res.status(500).json({ message: error.message });
        }
    }
    else {
        OTP = generateOTP();

        const verificationToken = new VerificationToken({
            owner: foundUser._id,
            token: OTP
        });

        try {
            await verificationToken.save();

            const phoneNumber = foundUser.phoneNumber;
            const message = verifyAccountTemplate(OTP);
            const sms = new sendSms({ phoneNumber, message });

            await sms.sendMessage();

            return res.status(200).json({ message: 'Your OTP has been reset successfully please check your phone messages' });
        }
        catch (error) {
            return res.status(error?.status || 500).json({ message: error?.message || error });
        }
    }
}


module.exports = {
    handleLogin,
    handlePasswordResetRequest,
    resetPassword,
    verifyAccount,
    resendVerificationToken
};