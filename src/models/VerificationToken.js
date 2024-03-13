const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const verificationTokenSchema = new Schema(
    {
        owner: { type: Schema.Types.ObjectId, ref: 'User', require: true },
        token: { type: String, require: true },
        expiresAt: {
            type: Date,
            expires: 3600,
            default: Date.now()
        }

    },
    {
        timestamps: true,
    }
);


verificationTokenSchema.pre("save", async (next) => {
    if (this.isModified("token")) {
        const hash = await bcrypt.hash(this.token, 10);
        this.token = hash
    }
    next();
});

verificationTokenSchema.methods.compareToken = async (token) => {
    const result = await bcrypt.compareSync(token, this.token);
    return result;
}

module.exports = mongoose.model('VerificationToken', verificationTokenSchema);

