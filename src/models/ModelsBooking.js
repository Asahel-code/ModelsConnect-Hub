const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modelsBookingSchema = new Schema(
    {
        jobTitle: { type: String, required: true },
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        county: { type: String, required: true },
        city: { type: String, required: true },
        description: { type: String, required: true },
        client: { type: Schema.Types.ObjectId, ref: 'Client', require: true },
        models: [
            { type: Schema.Types.ObjectId, ref: 'Model', require: true },
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('ModelsBooking', modelsBookingSchema); 