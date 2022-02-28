const db = require('../models');
const Order = db.user;

exports.findAll = async (req, res) => {

    const orders = await Order.findAll();

    res.send(orders);
}

