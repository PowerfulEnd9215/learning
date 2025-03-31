const express = require('express');
const appointmentController = require('../controllers/appointmentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Route to create a new appointment
router.post('/', authMiddleware.isAuthenticated, appointmentController.createAppointment);

// Route to view appointments for a user
router.get('/', authMiddleware.isAuthenticated, appointmentController.getUserAppointments);

// Route to view all appointments (admin only)
router.get('/admin', authMiddleware.isAuthenticated, authMiddleware.isAdmin, appointmentController.getAllAppointments);

module.exports = router;