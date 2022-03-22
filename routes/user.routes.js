module.exports = app => {
    const users = require('../controllers/user.controller');
    const router = require('express').Router();

    //find all users
    router.get('/', users.findAll);

    // find a one user 
    router.get('/:id', users.findOne);

    // to find by id and orders who user ask (association)
    router.get('/:id/orders', users.findOne);

    // create a new user
    router.post("/register", users.create);

    //route to update an exist user
    router.put("/updateUser/:id", users.update);

     //route to update an exist user
    router.delete("/deleteUser/:idUser", users.delete);

    // make login
    router.post("/signin", users.login);

    //define route gral
    app.use('/api/users', router);
}

