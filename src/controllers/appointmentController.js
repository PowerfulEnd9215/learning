exports.createAppointment = async (req, res) => {
    const { userId, specialtyId, appointmentDate } = req.body;

    // Validate input
    if (!userId || !specialtyId || !appointmentDate) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        const newAppointment = await Appointment.create({
            userId,
            specialtyId,
            appointmentDate,
        });
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ message: 'Error creating appointment', error });
    }
};

exports.getAppointmentsByUser = async (req, res) => {
    const userId = req.params.userId;

    try {
        const appointments = await Appointment.find({ userId });
        res.status(200).json(appointments);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error });
    }
};

exports.cancelAppointment = async (req, res) => {
    const appointmentId = req.params.id;

    try {
        const appointment = await Appointment.findByIdAndDelete(appointmentId);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }
        res.status(200).json({ message: 'Appointment canceled successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error canceling appointment', error });
    }
};