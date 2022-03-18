module.exports = app => {
    const orderArticle = require('../controllers/order_article.controller');
    const router = require('express').Router();

    router.get('/', orderArticle.findAll);
    // remember you want to find an other article witch one is not an id 
    router.get('/:idOrder', orderArticle.findOne);
  

    app.use('/vga/orderArticles', router);
}