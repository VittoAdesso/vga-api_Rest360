module.exports = app => {
    const bookingGift = require('../controllers/bookingGift.controller');
    const router = require('express').Router();

    router.get('/', bookingGift.findAll);
    // router.get('/:id', bookingGift.findOne);

    app.use('/vga/bookingGift', router);
}