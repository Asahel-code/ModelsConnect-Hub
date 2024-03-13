const ModelsBooking = require("../models/ModelsBooking");
const Model = require("../models/Model");
const User = require("../models/User")
const { sendSms } = require('../utils/sendSms');
const {modelBookingNotificationTemplate} = require("../utils/messages")

const fetchAllModelBooking = async (req, res) => {
    try {
        const modelsBooking = await ModelsBooking.find();

        return res.status(200).json(modelsBooking);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const fetchSpecificModelsBooking = async (req, res) => {
    try {
        return res.status(200).json(res.modelsBooking);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}


const fetchClientModelsBooking = async (req, res) => {
    try {
        const modelsBooking = await ModelsBooking.find({ client: req.userId });

        return res.status(200).json(modelsBooking);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const bookModels = async (req, res) => {
    const { body } = req;

    const newBooking = new ModelsBooking({
        startDate: body?.startDate,
        endDate: body?.endDate,
        location: body?.location,
        description: body?.description,
        client: req.userId,
        models: body?.models,
    });

    try {
        await newBooking.save();

        const startDate = new Date(body?.startDate);
        const endDate = new Date(body?.endDate);

        const dates = {
            startDate,
            endDate
        }

        for (const mod of body?.models) {
            const model = await Model.findOne({ _id: mod?.model });

            model.isBooked = true;

            await model.save();

            const user = await User.findOne({_id: model.user});

            const phoneNumber = user.phoneNumber;
            const message = modelBookingNotificationTemplate(dates);
            const sms = new sendSms({ phoneNumber, message });

            await sms.sendMessage();
        }


        return res.status(201).json({ message: `${req.user}, your booking has been set` })
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const deleteModelsBooking = async (req, res) => {
    try {
        await newBooking.deleteOne({ id: res.modelsBooking._id });

        return res.status(204).json({ message: "Models booking deleted" })
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

module.exports = {
    fetchAllModelBooking,
    fetchSpecificModelsBooking,
    fetchClientModelsBooking,
    bookModels,
    deleteModelsBooking
}