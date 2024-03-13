const Client = require('../models/Client');

const fetchAllClients = async (res, req) => {
    try {
        const clients = await Client.find();

        return res.status(200).json(clients);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const addClientProfile = async (res, req) => {
    const { body } = req;

    const newClient = new Client({
        name: body?.name,
        user: req.userId
    });

    try {
        await newClient.save();

        return res.status(201).json({ message: `${body?.name}, your client profile has been created successfully` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

module.exports = {
    fetchAllClients,
    addClientProfile
}