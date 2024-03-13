const Model = require('../models/Model');
const { uploadToCloudinary } = require('../middleware/imageUpload');

const fetchAllModel = async (res, req) => {
    try {
        const models = await Model.find();

        return res.status(200).json(models);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const fetchSpecificModel = async (res, req) => {
    try {
        return res.status(200).json(res.model);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const fetchModelProfile = async (res, req) => {
    try {
        const modelProfile = await Model.find({ user: req.userId });

        return res.status(200).json(modelProfile);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const addModelProfile = async (res, req) => {
    const { body } = req;

    let imagesArray = []

    if (req?.files) {
        for (let i = 0; i < req?.files?.length; i++) {
            try {
                const res = await uploadToCloudinary(req?.files[i]?.path);
                imagesArray.push(res.url);
            } catch (error) {
                return res.status(error?.status || 500).json({ message: error?.message || error });
            }
        }
    }

    const newModel = new Model({
        name: body?.name,
        images: imagesArray,
        gender: body?.gender,
        height: body?.height,
        skinColor: body?.skinColor,
        user: req.userId,
    });

    try {
        await newModel.save();

        return res.status(201).json({ message: `${body?.name}, your model profile has been created successfully` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const updateModelProfile = async (res, req) => {
    const { body } = req;

    res.model.name = body?.name;
    res.model.gender = body?.gender;
    res.model.height = body?.height;
    res.model.skinColor = body?.skinColor;

    try {
        await res.model.save();

        return res.status(200).json({ message: `${body?.name}, your model profile has been updated successfully` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const updateModelImages = async (res, req) => {
    const { body } = req;

    let imagesArray = []

    if (req?.files) {
        for (let i = 0; i < req?.files?.length; i++) {
            try {
                const res = await uploadToCloudinary(req?.files[i]?.path);
                imagesArray.push(res.url);
            } catch (error) {
                return res.status(error?.status || 500).json({ message: error?.message || error });
            }
        }
    }

    res.model.images = imagesArray;

    try {
        await res.model.save();

        return res.status(200).json({ message: `${res.model.name}, your model images have been updated successfully` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const setModelInterview = async (res, req) => {
    const { body } = req;

    res.model.isRecruited = "interview set";

    try {
        await res.model.save();

        return res.status(200).json({ message: `Interview has been set` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

const setModelAcceptance = async (res, req) => {
    const { body } = req;

    res.model.isRecruited = "accepted";

    try {
        await res.model.save();

        return res.status(200).json({ message: `Model aceeptance has been set` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const setModelDecline = async (res, req) => {
    const { body } = req;


    res.model.isRecruited = "declined";

    try {
        await res.model.save();

        return res.status(200).json({ message: `Model decline has been set` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const deleteModelProfile = async (res, req) => {
    try {
        await Model.deleteOne({ id: res.model._id });
        return res.status(204).json({ message: "Model deleted" });
    }
    catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }
}

module.exports = {
    fetchAllModel,
    fetchSpecificModel,
    fetchModelProfile,
    addModelProfile,
    updateModelProfile,
    updateModelImages,
    setModelInterview,
    setModelAcceptance,
    setModelDecline,
    deleteModelProfile
}