const db = require('../models');
const OrderArticle = db.user;

exports.findAll = async (req, res) => {

    const orderArticle = await OrderArticle.findAll();

    res.send(orderArticle);
}

