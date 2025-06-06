const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const validateUser = (user) => {
    const schema = Joi.object({
        phoneNumber: Joi.string().required(),
        password: passwordComplexity().required(),
    });

    return schema.validate(user);
}

const validateOtp = (otpd) => {
    const schema = Joi.object({
        otp: Joi.string().required(),
    });

    return schema.validate(otpd);
}

const validatePasswordResetRequest = (user) => {
    const schema = Joi.object({
        phoneNumber: Joi.string().required(),
    });

    return schema.validate(user);
}

const validatePasswordReset = (user) => {
    const schema = Joi.object({
        phoneNumber: Joi.string().required(),
        resetToken: Joi.string().required(),
        password: passwordComplexity().required(),
    });

    return schema.validate(user);
}

const validateUserId = (user) => {
    const schema = Joi.object({
        userId: Joi.string().required()
    });

    return schema.validate(user);
}


module.exports = {
    validateUser,
    validateOtp,
    validateUserId,
    validatePasswordResetRequest,
    validatePasswordReset
}