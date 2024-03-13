const Model = require("../models/Model");

const getModel = async (req, res, next) => {
    const {
        params: { modelId },
    } = req;

    let model

    if (!modelId) {
        res.status(400).json({message: "Parameter model id can not be empty" });
    }

    try {
        model = await Model.findOne({_id: modelId});
        if (model === null) return res.status(404).json({ message: "This model is not available" })
    }
    catch (error) {
        res.status(error?.status || 500).json({message: error?.message || error  });
    }

    res.model = model;
    next()
}

module.exports = getModel