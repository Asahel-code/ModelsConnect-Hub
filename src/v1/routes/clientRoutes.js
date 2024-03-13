const express = require("express");
const router = express.Router();
const clientController = require("../../controllers/clientController");
const verifyAuth = require('../../middleware/verifyAuth');
const verifyAdminRole = require("../../middleware/verifyAdminRole");
const verifyClientRole = require("../../middleware/verifyClientRole");

router.get('/', verifyAuth, verifyAdminRole, clientController.fetchAllClients);
router.post('/', verifyAuth, verifyClientRole, clientController.addClientProfile);

module.exports = router;