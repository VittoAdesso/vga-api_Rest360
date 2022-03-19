module.exports = app => {
    const users = require('../controllers/user.controller');
    const router = require('express').Router();

    //find all users
    router.get('/', users.findAll);
    // find a one user 
    router.get('/:id', users.findOne);
    // create a new user
    router.post("/register", users.create);

    // make login
    router.post("/login", users.login);

    //define route gral
    app.use('/vga/users', router);
}

