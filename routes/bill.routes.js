module.exports = app => {

    const bill = require('../controllers/bill.controller');
    const router = require('express').Router();

    //to find all
    router.get('/', bill.findAll);

    // to find one bill with id
    router.get('/:id', bill.findOne);

    // to create one bill with
    router.post('/', bill.create);

    // route i want to use 
    app.use('/api/bill', router);
}