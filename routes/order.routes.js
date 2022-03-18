module.exports = app => {
    
    const orders = require('../controllers/order.controller');
    const router = require('express').Router();

    router.get('/', orders.findAll);
    //TO FIND BY ID
    router.get('/:id', orders.findOne);
    
    app.use('/vga/orders', router);
}