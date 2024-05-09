const Client = require("../models/Client");

const getClient = async (req, res, next) => {
    const {
        params: { clientId },
    } = req;

    let client;

    if (!clientId) {
        res.status(400).json({message: "Parameter client id can not be empty" });
    }

    try {
        client = await Client.findOne({_id: clientId});
        if (client === null) return res.status(404).json({ message: "This client is not available" })
    }
    catch (error) {
        res.status(error?.status || 500).json({message: error?.message || error  });
    }

    res.client = client;
    next()
}

module.exports = getClient