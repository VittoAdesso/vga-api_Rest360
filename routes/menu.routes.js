module.exports = app => {

    const menus = require('../controllers/menu.controller');
    const router = require('express').Router();

    router.get('/', menus.findAll);
    
    router.get('/:id', menus.findOne);

    app.use('/api/menus', router);
}