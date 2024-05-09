const express = require('express');
const router = express.Router();
const registerController = require('../../controllers/registerController');

router.post('/model', registerController.handleNewModel);
router.post('/client', registerController.handleNewClient);

module.exports = router;