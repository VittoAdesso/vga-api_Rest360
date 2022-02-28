const db = require('../models');
const MenuArticle = db.user;

exports.findAll = async (req, res) => {

    const menusArticles = await MenuArticle.findAll();

    res.send(menusArticles);
}

