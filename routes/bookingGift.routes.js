module.exports = app => {
    const bookingGift = require('../controllers/bookingGift.controller');
    const router = require('express').Router();

    router.get('/', bookingGift.findAll);
    // router.get('/:id', bookingGift.findOne);

    //route to register route a new one
    router.post("/register", bookingGift.create);

    app.use('/api/bookingGift', router);
}