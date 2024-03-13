require('dotenv').config();
const User = require('../models/User');
const VerificationToken = require('../models/VerificationToken');
const bcrypt = require('bcrypt');
const { validateRegisterUser } = require('../utils/errorHandler');
const { sendSms } = require('../utils/sendSms');
const { verifyAccountTemplate, staffPasswordTemplate } = require("../utils/messages");

const handleNewModel = async (req, res) => {
    const { body } = req;
    const { error } = validateRegisterUser(body);

    //if valid, return 400 - Bad request
    if (error) return res.status(400).json({ message: error.details[0].message });

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ phoneNumber: body?.phoneNumber }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(body.password, 10);

        //create and store the new user
        const newUser = new User({
            username: body?.name,
            phoneNumber: body?.phoneNumber,
            password: hashedPwd,
            isModel: true
        });

        OTP = generateOTP()

        const verificationToken = new VerificationToken({
            owner: newUser._id,
            token: OTP
        });

        await verificationToken.save();
        await newUser.save();

        const phoneNumber = newUser.phoneNumber;
        const message = verifyAccountTemplate(OTP);
        const sms = new sendSms({ phoneNumber, message });

        await sms.sendMessage();

        res.status(201).json({ message: `New user ${body.name} created!, Please login and verify your account a sms has been sent to your phone number` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const handleNewClient = async (req, res) => {
    const { body } = req;
    const { error } = validateRegisterUser(body);

    //if valid, return 400 - Bad request
    if (error) return res.status(400).json(error.details[0].message);

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ phoneNumber: body?.phoneNumber }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(body.password, 10);

        //create and store the new user
        const newUser = new User({
            username: body?.name,
            phoneNumber: body?.phoneNumber,
            password: hashedPwd,
            isClient: true,
        });

        OTP = generateOTP()

        const verificationToken = new VerificationToken({
            owner: newUser._id,
            token: OTP
        });

        await verificationToken.save();
        await newUser.save();

        const phoneNumber = newUser.phoneNumber;
        const message = verifyAccountTemplate(OTP);
        const sms = new sendSms({ phoneNumber, message });

        await sms.sendMessage();

        res.status(201).json({ message: `New user ${body.name} created!, Please login and verify your account a sms has been sent to your phone number` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const handleNewStaff = async (req, res) => {
    const { body } = req;
    const { error } = validateRegisterUser(body);

    //if valid, return 400 - Bad request
    if (error) return res.status(400).json(error.details[0].message);

    // check for duplicate usernames in the db
    const duplicate = await User.findOne({ phoneNumber: body?.phoneNumber }).exec();
    if (duplicate) return res.sendStatus(409); //Conflict 

    try {
        //encrypt the password
        const hashedPwd = await bcrypt.hash(body?.password, 10);

        //create and store the new user
        const newUser = new User({
            username: body?.name,
            phoneNumber: body?.phoneNumber,
            password: hashedPwd,
            isStaff: true,
        });

        await newUser.save();

        const credentials = {
            phoneNumber: body?.phoneNumber,
            password: body?.password
        }

        const phoneNumber = newUser.phoneNumber;
        const message = staffPasswordTemplate(credentials);
        const sms = new sendSms({ phoneNumber, message });

        await sms.sendMessage();

        res.status(201).json({ message: `New user ${body.name} created!, login credentials has been sent to their phone number` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}


module.exports = { handleNewModel, handleNewClient, handleNewStaff };