const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema(
    {
        name: { type: String, required: true },
        county: { type: String, required: true },
        city: { type: String, required: true },
        persona: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
        status: { type: String, default: 'pending', enum: ['active', 'inactive', 'pending'], required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Client', clientSchema); 