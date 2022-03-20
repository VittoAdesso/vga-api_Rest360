module.exports = app => {
    const orderArticle = require('../controllers/order_article.controller');
    const router = require('express').Router();

    // TO FIND AND SHOW ALL 
    router.get('/', orderArticle.findAll);

    // TO FIND ONE ORDER WITH ID SPECIFIC
    router.get('/:id', orderArticle.findOne);

    // remember you want to find an other article witch one is not an id    
    router.get('/order/:idOrder', orderArticle.findAll);

    // GRAL ROUTE
    app.use('/api/orderArticles', router);
}