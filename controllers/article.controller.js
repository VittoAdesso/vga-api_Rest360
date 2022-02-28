const db = require('../models');
const Article = db.table;

exports.findAll = async (req, res) => {

    const article = await Article.findAll();

    res.send(article);
}
