const ModelsBooking = require("../models/ModelsBooking");

const getModelsBooking = async (req, res, next) => {
    const {
        params: { bookingId },
    } = req;

    let modelsBooking

    if (!bookingId) {
        res.status(400).json({message: "Parameter model booking id can not be empty" });
    }

    try {
        modelsBooking = await ModelsBooking.findOne({_id: bookingId});
        if (modelsBooking === null) return res.status(404).json({ message: "This booking is not available" })
    }
    catch (error) {
        res.status(error?.status || 500).json({message: error?.message || error  });
    }

    res.modelsBooking = modelsBooking;
    next()
}

module.exports = getModelsBooking