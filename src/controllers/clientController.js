const Client = require('../models/Client');

const fetchAllClients = async (req, res) => {
    try {
        const clients = await Client.find();

        return res.status(200).json(clients);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const fetchClientProfile = async (req, res) => {
    try {
        const clientProfile = await Client.findOne({ user: req.userId });

        return res.status(200).json(clientProfile);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const addClientProfile = async (req, res) => {
    const { body } = req;

    const newClient = new Client({
        name: body?.name,
        county: body?.county,
        city: body?.city,
        persona: body?.persona,
        user: req.userId
    });

    try {
        await newClient.save();

        return res.status(201).json({ message: `${body?.name}, your client profile has been created successfully` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const updateClientProfile = async (req, res) => {
    const { body } = req;

    const clientProfile = await Client.findOne({ user: req.userId });

    clientProfile.county = body?.county;
    clientProfile.city = body?.city;
    clientProfile.name = body?.name;

    try {
        await clientProfile.save();

        return res.status(201).json({ message: `${clientProfile.name}, your client profile has been updated successfully` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const updateAccountStatus = async (req, res) => {
    const { body } = req;

    res.client.status = body?.status;

    try {
        await res.client.save();

        return res.status(200).json({ message: `Account status has been updated successfully` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const deleteClientProfile = async (req, res) => {
    try {
        await Model.deleteOne({ id: res.client._id });
        return res.status(204).json({ message: "Client deleted" });
    }
    catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}



module.exports = {
    fetchAllClients,
    fetchClientProfile,
    addClientProfile,
    updateClientProfile,
    updateAccountStatus,
    deleteClientProfile
}