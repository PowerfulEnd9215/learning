const Payment = require('../models/paymentModel');
const Appointment = require('../models/appointmentModel');

// Process payment for attended appointments
exports.processPayment = async (req, res) => {
    const { appointmentId, amount } = req.body;

    try {
        // Validate appointment
        const appointment = await Appointment.findById(appointmentId);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        // Create payment record
        const payment = new Payment({
            appointmentId,
            amount,
            status: 'completed' // Assuming payment is successful
        });

        await payment.save();

        res.status(201).json({ message: 'Payment processed successfully', payment });
    } catch (error) {
        res.status(500).json({ message: 'Error processing payment', error });
    }
};

// Retrieve payment details
exports.getPaymentDetails = async (req, res) => {
    const { paymentId } = req.params;

    try {
        const payment = await Payment.findById(paymentId);
        if (!payment) {
            return res.status(404).json({ message: 'Payment not found' });
        }

        res.status(200).json(payment);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving payment details', error });
    }
};