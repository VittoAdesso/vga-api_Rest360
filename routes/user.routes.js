module.exports = app => {
    const users = require('../controllers/user.controller');
    const router = require('express').Router();

    router.get('/', users.findAll);
    router.get('/:id', users.findOne);
    router.post("/", users.create);

    app.use('/vga/users', router);
}

