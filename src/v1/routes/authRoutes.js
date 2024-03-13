const express = require('express');
const router = express.Router();
const authController = require('../../controllers/authController');
const verifyAuth = require('../../middleware/verifyAuth');

router.post('/', authController.handleLogin);
router.post('/password_reset_request', authController.handlePasswordResetRequest);
router.post('/reset_password', authController.resetPassword);
router.post('/verify_account', verifyAuth, authController.verifyAccount);
router.get('/resend_verification_token', verifyAuth, authController.resendVerificationToken);

module.exports = router;