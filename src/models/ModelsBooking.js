const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const modelsBookingSchema = new Schema(
    {
        startDate: { type: Date, required: true },
        endDate: { type: Date, required: true },
        location: { type: String, required: true },
        description: { type: String, required: true },
        client: { type: Schema.Types.ObjectId, ref: 'Client', require: true },
        models: [
            {
                model: { type: Schema.Types.ObjectId, ref: 'Model', require: true },
            }
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('ModelsBooking', modelsBookingSchema); 