module.exports = app => {

    const bill = require('../controllers/bill.controller');

    const router = require('express').Router();

    router.get('/', bill.findAll);
    // router.get('/:id', bill.findOne);
   

    app.use('/vga/bill', router);
}