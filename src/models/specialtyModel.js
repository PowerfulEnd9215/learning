const mongoose = require('mongoose');

const specialtySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    superSpecialties: [{
        type: String
    }]
}, { timestamps: true });

const Specialty = mongoose.model('Specialty', specialtySchema);

module.exports = Specialty;