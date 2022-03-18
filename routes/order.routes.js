module.exports = app => {
    
    const orders = require('../controllers/order.controller');
    const router = require('express').Router();

    router.get('/', orders.findAll);
    // remember you want to find an other article witch one is not an id 
    router.get('/:idOrder', orders.findOne);
    
    app.use('/vga/orders', router);
}