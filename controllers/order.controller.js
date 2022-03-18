const db = require('../models');
const Order = db.order;

exports.findAll = async (req, res) => {

    const orders = await Order.findAll();

    res.send(orders);
}


// findOne un id, controlando errores en case que no encuentre uno existente 
exports.findOne = async (req, res) => {

    const id = req.params.id; 
    try { 
    const order = await Order.findOne({
        where: {
            id : id,
        },
    });

    if (order) { 
    return res.status(200).json(order);} 
        else { 
        return res.status(404).json('No order found by this id'); } 
        } 
    catch (err) { return res.status(500).json(err); } 
};

