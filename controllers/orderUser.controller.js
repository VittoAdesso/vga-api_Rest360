const db = require('../models');
const OrderUsers = db.orderUser;

exports.findAll = async (req, res) => {

    const orderUsers = await OrderUsers.findAll();

    res.send(orderUsers);
}

