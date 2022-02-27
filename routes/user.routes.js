module.exports = app => {
    const users = require('../controllers/user.controller');
    const router = require('express').Router();

    router.get('/', users.findAll);
    router.get('/:id', users.findOne);

    app.use('/api/users', router);
}