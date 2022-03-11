module.exports = app => {
    const orderArticle = require('../controllers/order_article.controller');
    const router = require('express').Router();

    router.get('/', orderArticle.findAll);
    router.get('/:id', orderArticle.findOne);

    app.use('/vga/orderArticles', router);
}