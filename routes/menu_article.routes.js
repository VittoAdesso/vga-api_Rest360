module.exports = app => {
    const menusArticle = require('../controllers/menu_article.controller');
    const router = require('express').Router();

    router.get('/', menusArticle.findAll);
    // router.get('/:id', menus.findOne);

    app.use('/vga/menuArticle', router);
}