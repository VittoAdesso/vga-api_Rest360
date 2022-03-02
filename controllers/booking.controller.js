const db = require('../models');
const Booking = db.booking;

exports.findAll = async (req, res) => {

    const bookings = await Booking.findAll();

    res.send(bookings);
}

