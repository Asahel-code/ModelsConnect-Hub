const express = require("express");
const router = express.Router();
const modelController = require("../../controllers/modelController");
const { uploadImages } = require('../../middleware/imageUpload');
const verifyAuth = require("../../middleware/verifyAuth");
const verifyAdminRole = require("../../middleware/verifyAdminRole");
const verifyModelRole = require("../../middleware/verifyModelRole");
const getModel = require("../../middleware/getModel");
const verifyClientRole = require("../../middleware/verifyClientRole");

router.get('/', verifyAuth, verifyAdminRole, modelController.fetchAllModel);
router.get('/available', verifyAuth, verifyClientRole, modelController.fetchAllAvailableModel);
router.get('/profile', verifyAuth, verifyModelRole, modelController.fetchModelProfile);
router.get('/:modelId', verifyAuth, getModel, modelController.fetchSpecificModel);
router.post('/', verifyAuth, verifyModelRole, uploadImages.array('images', 10), modelController.addModelProfile);
router.patch('/profile/update', verifyAuth, verifyModelRole, modelController.updateModelProfile);
router.patch('/images', verifyAuth, verifyModelRole, uploadImages.array('images', 10), modelController.addModelImages);
router.patch('/:modelId', verifyAuth, verifyAdminRole, getModel, modelController.updateAccountStatus);
router.delete('/images', verifyAuth, verifyModelRole, modelController.deleteModelImage);
router.delete('/:modelId', verifyAuth, verifyModelRole, getModel, modelController.deleteModelProfile);

module.exports = router;