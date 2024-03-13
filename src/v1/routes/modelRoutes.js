const express = require("express");
const router = express.Router();
const modelController = require("../../controllers/modelController");
const verifyAuth = require("../../middleware/verifyAuth");
const verifyAdminRole = require("../../middleware/verifyAdminRole");
const verifyModelRole = require("../../middleware/verifyModelRole");
const getModel = require("../../middleware/getModel");

router.get('/', verifyAuth, verifyAdminRole, modelController.fetchAllModel);
router.get('/model_profile', verifyAuth, verifyModelRole, modelController.fetchModelProfile);
router.get('/:modelId', verifyAuth, getModel, modelController.fetchSpecificModel);
router.post('/', verifyAuth, verifyModelRole, modelController.addModelProfile);
router.patch('/:modelId', verifyAuth, verifyModelRole, getModel, modelController.updateModelProfile);
router.patch('/images/:modelId', verifyAuth, verifyModelRole, getModel, modelController.updateModelImages);
router.patch('/set_interview/:modelId', verifyAuth, verifyModelRole, getModel, modelController.setModelInterview);
router.patch('/set_acceptance/:modelId', verifyAuth, verifyModelRole, getModel, modelController.setModelAcceptance);
router.patch('/set_decline/:modelId', verifyAuth, verifyModelRole, getModel, modelController.setModelDecline);
router.delete('/:modelId', verifyAuth, verifyModelRole, getModel, modelController.deleteModelProfile);

module.exports = router;