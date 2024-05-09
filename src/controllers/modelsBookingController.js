const ModelsBooking = require("../models/ModelsBooking");
const Model = require("../models/Model");
const User = require("../models/User");
const Client = require("../models/Client");
const { sendSms } = require('../utils/sendSms');
const { modelBookingNotificationTemplate } = require("../utils/messages");

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
    const modelsBooking = await ModelsBooking.find();
    const client = await Client.findOne({ user: req.userId });

    let bookings = []

    for(const booking of modelsBooking){
        if(booking.client.equals(client._id)){
            bookings.push(booking);
        }
    }

    try {
        return res.status(200).json(bookings);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const fetchModelModelsBooking = async (req, res) => {
    try {
        const modelsBooking = await ModelsBooking.find();
        const model = await Model.findOne({ user: req.userId });

        let bookings = []

        for (const modelBooking of modelsBooking) {
            if (modelBooking.models.includes(model._id)) {
                modelBooking.models = null;
                bookings.push(modelBooking);
            }
        }

        return res.status(200).json(bookings);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const bookModels = async (req, res) => {
    const { body } = req;

    const newBooking = new ModelsBooking({
        jobTitle: body?.jobTitle,
        startDate: body?.startDate,
        endDate: body?.endDate,
        county: body?.county,
        city: body?.city,
        description: body?.description,
        client: body?.client,
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
            const model = await Model.findOne({ _id: mod });

            model.isBooked = true;

            await model.save();

            const user = await User.findOne({ _id: model.user });

            const phoneNumber = user.phoneNumber;
            const message = modelBookingNotificationTemplate(dates, newBooking.description);
            const sms = new sendSms({ phoneNumber, message });

            await sms.sendMessage();
        }


        return res.status(201).json({ message: `Your contract has been set` })
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const updateBookModels = async (req, res) => {
    const { body } = req;

    res.modelsBooking.jobTitle = body?.jobTitle;
    res.modelsBooking.startDate = body?.startDate;
    res.modelsBooking.endDate = body?.endDate;
    res.modelsBooking.county = body?.county;
    res.modelsBooking.city = body?.city;
    res.modelsBooking.description = body?.description;

    try {
        res.modelsBooking.save();

        return res.status(201).json({ message: `Your contract has been updated` })
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const deleteModelsBooking = async (req, res) => {
    try {
        await ModelsBooking.deleteOne({ id: res.modelsBooking._id });

        return res.status(204).json({ message: "Models booking deleted" })
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

module.exports = {
    fetchAllModelBooking,
    fetchSpecificModelsBooking,
    fetchClientModelsBooking,
    fetchModelModelsBooking,
    bookModels,
    updateBookModels,
    deleteModelsBooking
}