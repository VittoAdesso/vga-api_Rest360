module.exports = app => {
    const menusArticle = require('../controllers/menu_article.controller');
    const router = require('express').Router();

    router.get('/', menusArticle.findAll);
    // router.get('/:id', menuArticle.findOne);

    app.use('/api/menuArticle', router);
}