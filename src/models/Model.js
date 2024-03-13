const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modelSchema = new Schema(
    {
        name: { type: String, required: true },
        images: { type: Array, required: true },
        gender: { type: String, required: true },
        height: { type: String, required: true },
        skinColor: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
        isBooked: { type: Boolean, default: false, required: true },
        isAvailable: { type: Boolean, default: true, required: true },
        isRecruited: { type: String, default: 'awaiting recruitment', enum: ['awaiting recruitment', 'interview set', 'accepted', 'declined'], required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Model', modelSchema); 