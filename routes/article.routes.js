module.exports = app => {

    const articles = require('../controllers/article.controller');

    const router = require('express').Router();

    // to find all 
    router.get('/', articles.findAll);
    
    //to find one 
    router.get('/:id', articles.findOne);

    //route to register route a new one
    router.post("/register", articles.create);

    //to update
    router.put("/updateArticle", articles.update);

    // gral route
    app.use('/api/articles', router);
}
