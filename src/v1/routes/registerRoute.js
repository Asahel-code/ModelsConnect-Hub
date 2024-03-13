const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/registerController');
const verifyAuth = require("../../middleware/verifyAuth");
const verifyAdminRole = require('../../middleware/verifyAdminRole');

router.post('/model', registerController.handleNewModel);
router.post('/client', registerController.handleNewClient);
router.post('/staff', verifyAuth, verifyAdminRole, registerController.handleNewStaff);

module.exports = router;