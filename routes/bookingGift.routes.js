module.exports = app => {
    const bookingGift = require('../controllers/bookingGift.controller');
    const router = require('express').Router();

    router.get('/', bookingGift.findAll);
    // router.get('/:id', bookingGift.findOne);

    //route to create route a new one
    router.post("/", bookingGift.create);

    //to update
    router.put("/updateOne", bookingGift.update);

    app.use('/api/bookingGift', router);
}