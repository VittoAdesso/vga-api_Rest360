module.exports = app => {
    const bookings = require('../controllers/booking.controller');
    const router = require('express').Router();

    router.get('/', bookings.findAll);
    // router.get('/:id', menus.findOne);

    app.use('/vga/booking', router);
}