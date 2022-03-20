module.exports = app => {

    const bill = require('../controllers/bill.controller');
    const router = require('express').Router();

    //to find all
    router.get('/', bill.findAll);

    // to fin one bill with id
    router.get('/:id', bill.findOne);

    // route i want to use 
    app.use('/api/bill', router);
}