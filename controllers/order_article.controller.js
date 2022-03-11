const db = require('../models');
const OrderArticle = db.orderArticle;

exports.findAll = async (req, res) => {

    const orderArticle = await OrderArticle.findAll();

    res.send(orderArticle);
}

exports.findOne = async (req, res) => {

    const { id } = req.params;
    
    const orderArticle = await OrderArticle.findOne({
        where: {
            id : id,
        },
    });

    res.send(orderArticle);
}