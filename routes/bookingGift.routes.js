module.exports = app => {
    const bookingGift = require('../controllers/bookingGift.controller');
    const router = require('express').Router();

    router.get('/', bookingGift.findAll);
    // router.get('/:id', bookingGift.findOne);
    router.post("/", bookingGift.create);

    app.use('/vga/bookingGift', router);
}