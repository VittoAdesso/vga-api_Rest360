const db = require('../models');
const Booking = db.user;

exports.findAll = async (req, res) => {

    const bookings = await Booking.findAll();

    res.send(bookings);
}

