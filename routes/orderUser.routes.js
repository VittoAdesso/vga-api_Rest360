module.exports = app => {
    
    const orderUser = require('../controllers/orderUser.controller');
    const router = require('express').Router();

    router.get('/', orderUser.findAll);
    // router.get('/:id', menus.findOne);

    app.use('/vga/orderUsers', router);
}