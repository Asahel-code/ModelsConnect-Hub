const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        phoneNumber: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        isVerified: { type: Boolean, default: false, required: true },
        isAdmin: { type: Boolean, default: false, required: true },
        isClient: { type: Boolean, default: false, required: true },
        isModel: { type: Boolean, default: false, required: true },
        refreshToken: String,
        passwordResetToken: String,
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('User', userSchema); 