module.exports = app => {
    const orderArticlesTwo = require('../controllers/order_article_two.controller');
    const router = require('express').Router();

    // TO FIND AND SHOW ALL 
    router.get('/', orderArticlesTwo.findAll);

    // GRAL ROUTE
    app.use('/api/orderArticlesTwo', router);
}
