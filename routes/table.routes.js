module.exports = app => {
    const tables = require('../controllers/table.controller');
    const router = require('express').Router();

    router.get('/', tables.findAll);
    router.get('/:id', tables.findOne);

    app.use('/api/tables', router);
}