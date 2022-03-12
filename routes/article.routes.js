module.exports = app => {

    const articles = require('../controllers/article.controller');

    const router = require('express').Router();

    router.get('/', articles.findAll);
    router.get('/:id', articles.findOne);
    router.post("/", articles.create);


    app.use('/vga/articles', router);
}