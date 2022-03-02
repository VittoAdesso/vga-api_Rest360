const db = require('../models');
const Order = db.order;

exports.findAll = async (req, res) => {

    const orders = await Order.findAll();

    res.send(orders);
}

