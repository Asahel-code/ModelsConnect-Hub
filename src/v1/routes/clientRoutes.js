const express = require("express");
const router = express.Router();
const clientController = require("../../controllers/clientController");
const verifyAuth = require('../../middleware/verifyAuth');
const verifyAdminRole = require("../../middleware/verifyAdminRole");
const verifyClientRole = require("../../middleware/verifyClientRole");
const getClient = require("../../middleware/getClient");

router.get('/', verifyAuth, verifyAdminRole, clientController.fetchAllClients);
router.get('/profile', verifyAuth, verifyClientRole, clientController.fetchClientProfile);
router.post('/', verifyAuth, verifyClientRole, clientController.addClientProfile);
router.patch('/profile/update', verifyAuth, verifyClientRole, clientController.updateClientProfile);
router.patch('/:clientId', verifyAuth, verifyAdminRole,  getClient, clientController.updateAccountStatus);
router.delete('/:clientId', verifyAuth, verifyAdminRole,  getClient, clientController.deleteClientProfile);

module.exports = router;