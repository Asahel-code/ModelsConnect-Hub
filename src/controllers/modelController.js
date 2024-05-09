const Model = require('../models/Model');
const { uploadToCloudinary } = require('../middleware/imageUpload');

const fetchAllModel = async (req, res) => {
    try {
        const models = await Model.find();

        return res.status(200).json(models);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const fetchAllAvailableModel = async (req, res) => {
    try {
        const models = await Model.find();

        let availableModels = [];

        for(const model of models){
            if(model.status === "active"){
                availableModels.push(model);
            }
        }
        return res.status(200).json(availableModels);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const fetchSpecificModel = async (req, res) => {
    try {
        return res.status(200).json(res.model);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const fetchModelProfile = async (req, res) => {
    try {
        const modelProfile = await Model.findOne({ user: req.userId });

        return res.status(200).json(modelProfile);
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const addModelProfile = async (req, res) => {
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
        county: body?.county,
        city: body?.city,
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

const updateModelProfile = async (req, res) => {
    const { body } = req;

    const modelProfile = await Model.findOne({ user: req.userId });

    modelProfile.name = body?.name;
    modelProfile.county = body?.county;
    modelProfile.city = body?.city;
    modelProfile.gender = body?.gender;
    modelProfile.height = body?.height;
    modelProfile.skinColor = body?.skinColor;

    try {
        await modelProfile.save();

        return res.status(200).json({ message: `${modelProfile?.name}, your model profile has been updated successfully` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const addModelImages = async (req, res) => {

    const modelProfile = await Model.findOne({ user: req.userId });

    let imagesArray = []

    for (const image of modelProfile.images) {
        imagesArray.push(image);
    }

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

    modelProfile.images = imagesArray;

    try {
        await modelProfile.save();

        return res.status(200).json({ message: `${modelProfile.name}, your added more images successfully` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const deleteModelImage = async (req, res) => {

    const image = req.query.image;

    const modelProfile = await Model.findOne({ user: req.userId });
    try {
        await Model.findByIdAndUpdate(
            modelProfile._id,
            { $pull: { images: image } },
            { new: true }
        );

        return res.status(204).json({ message: "Model deleted" });
    }
    catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error });
    }

}

const updateAccountStatus = async (req, res) => {
    const { body } = req;

    res.model.status = body?.status;

    try {
        await res.model.save();

        return res.status(200).json({ message: `Account status has been updated successfully` });
    } catch (error) {
        return res.status(error?.status || 500).json({ message: error?.message || error })
    }
}

const deleteModelProfile = async (req, res) => {
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
    fetchAllAvailableModel,
    fetchSpecificModel,
    fetchModelProfile,
    addModelProfile,
    updateModelProfile,
    addModelImages,
    updateAccountStatus,
    deleteModelImage,
    deleteModelProfile
}