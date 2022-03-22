module.exports = app => {
    const bookings = require('../controllers/booking.controller');
    const router = require('express').Router();

    router.get('/', bookings.findAll);
    // router.get('/:id', bookings.findOne);

    //route to register route a new one
    router.post("/register", bookings.create);

     //route to update an exist booking
    router.put("/updateBooking/:id", bookings.update);

    // route to delete one id booking
    router.delete("/deleteBooking/:id", bookings.delete);
    
    app.use('/api/booking', router);
}