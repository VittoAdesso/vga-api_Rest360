module.exports = app => {
    
    const orderArticles = require('../controllers/order_artcile.controller');
    const router = require('express').Router();

    // get all orderArticles
    router.get('/', orderArticles.findAll);

    app.use('/api/orderArticles', router);
}