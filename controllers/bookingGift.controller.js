const db = require('../models');
const BookingGift = db.bookingGift;

exports.findAll = async (req, res) => {

    const bookingsGift = await BookingGift.findAll();

    res.send(bookingsGift);
}

