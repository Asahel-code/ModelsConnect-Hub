const express = require("express");
const router = express.Router();
const modelsBookingController = require('../../controllers/modelsBookingController');
const getModelsBooking = require('../../middleware/getModelsBooking');
const verifyAuth = require('../../middleware/verifyAuth');
const verifyAdminRole = require("../../middleware/verifyAdminRole");
const verifyClientRole = require("../../middleware/verifyClientRole");
const verifyModelRole = require("../../middleware/verifyModelRole");

router.get('/', verifyAuth, verifyAdminRole, modelsBookingController.fetchAllModelBooking);
router.get('/client', verifyAuth, verifyClientRole, modelsBookingController.fetchClientModelsBooking);
router.get('/model', verifyAuth, verifyModelRole, modelsBookingController.fetchModelModelsBooking);
router.get('/:bookingId', verifyAuth, getModelsBooking, modelsBookingController.fetchSpecificModelsBooking);
router.post('/', verifyAuth, verifyClientRole, modelsBookingController.bookModels);
router.patch('/:bookingId', verifyAuth, verifyClientRole, getModelsBooking, modelsBookingController.updateBookModels);
router.delete('/:bookingId', verifyAuth, verifyClientRole, getModelsBooking, modelsBookingController.deleteModelsBooking);

module.exports = router;