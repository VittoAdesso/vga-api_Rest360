module.exports = app => {
    const bookings = require('../controllers/booking.controller');
    const router = require('express').Router();

    router.get('/', bookings.findAll);
    // router.get('/:id', bookings.findOne);

    //route to register route a new one
    router.post("/register", bookings.create);

     //route to update an exist booking
    router.post("/updateBooking/:id", bookings.update);

    
    app.use('/vga/booking', router);
}