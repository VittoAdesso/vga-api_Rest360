const db = require('../models');
const Article = db.article;

exports.findAll = async (req, res) => {

    const articles = await Article.findAll();

    res.send(articles);
}
