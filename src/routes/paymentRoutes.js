const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');

// Route to process payment for an attended appointment
router.post('/process', authMiddleware.verifyToken, paymentController.processPayment);

// Route to get payment status for an appointment
router.get('/status/:appointmentId', authMiddleware.verifyToken, paymentController.getPaymentStatus);

module.exports = router;