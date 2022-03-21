module.exports = app => {
    const menusArticle = require('../controllers/menu_article.controller');
    const router = require('express').Router();

    router.get('/', menusArticle.findAll);
    app.use('/api/menuArticle', router);
}