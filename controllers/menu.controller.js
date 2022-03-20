const db = require('../models');
const Menu = db.menu;
const Article = db.article;

exports.findAll = async (req, res) => {

    const menus = await Menu.findAll();

    res.send(menus);
}

exports.findOne = async (req, res) => {

    const { id } = req.params;
    
    const menus = await Menu.findOne({
        include: [{
            model: Article,
            as: "articles"
        }],
        where: {
            id 
        },
    });

    res.send(menus);
}