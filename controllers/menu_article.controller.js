const db = require('../models');
const MenuArticle = db.menuArticle;

exports.findAll = async (req, res) => {

    const menusArticles = await MenuArticle.findAll();

    res.send(menusArticles);
}

