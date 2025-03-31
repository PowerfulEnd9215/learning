const Specialty = require('../models/specialtyModel');

// Fetch all available specialties
exports.getSpecialties = async (req, res) => {
    try {
        const specialties = await Specialty.find();
        res.status(200).json(specialties);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching specialties', error });
    }
};

// Add a new specialty
exports.addSpecialty = async (req, res) => {
    const { name, description } = req.body;

    try {
        const newSpecialty = new Specialty({ name, description });
        await newSpecialty.save();
        res.status(201).json(newSpecialty);
    } catch (error) {
        res.status(500).json({ message: 'Error adding specialty', error });
    }
};