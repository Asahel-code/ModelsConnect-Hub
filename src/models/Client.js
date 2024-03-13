const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema(
    {
        name: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: 'User', require: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Client', clientSchema); 