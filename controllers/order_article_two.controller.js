const db = require('../models');
const OrderArticleTwo = db.orderArticleTwo;

//FINDING ALL
exports.findAll = async (req, res) => {

  const ordersArticle = await OrderArticleTwo.findAll();

  res.send(ordersArticle);
}
