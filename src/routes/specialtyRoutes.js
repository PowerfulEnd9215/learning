const express = require('express');
const specialtyController = require('../controllers/specialtyController');

const router = express.Router();

// Route to fetch all specialties
router.get('/', specialtyController.getAllSpecialties);

// Route to add a new specialty
router.post('/', specialtyController.addSpecialty);

module.exports = router;