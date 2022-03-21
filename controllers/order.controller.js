const db = require('../models');
const Order = db.order;
const Article = db.article;
const User = db.user;

exports.findAll = async (req, res) => {

    const orders = await Order.findAll();

    res.send(orders);
}


// findOne id, controlling errors in case dont find an exist one, BUT IN THIS ONE, YOU INCLUDED THE ARTCILE BECAUSE I NEED IT
exports.findOne = async (req, res) => {

    const id = req.params.id; 
    try { 
    const order = await Order.findOne({
        include: [{
            model: Article,
            as: "articles"
        }, {
            model: User,
            as: "user"
        }],
        where: {
            id 
        },
    });

    if (order) { 
    return res.status(200).json(order);} 
        else { 
        return res.status(404).json('No order found by this id'); } 
        } 
    catch (err) { return res.status(500).json(err); } 
};

// // findOne id, controlling errors in case dont find an exist one (WITH OUT ASSOCIATION)
// exports.findOne = async (req, res) => {

//     const id = req.params.id; 
//     try { 
//     const order = await Order.findOne({
//         where: {
//             id 
//         },
//     });

//     if (order) { 
//     return res.status(200).json(order);} 
//         else { 
//         return res.status(404).json('No order found by this id'); } 
//         } 
//     catch (err) { return res.status(500).json(err); } 
// };


// method to create a new one
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.id) {
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    // Create a new order
    const newOrder = {

        peopleCount: req.body.peopleCount,
        costNeto: req.body.costNeto,
        iva:req.body.iva,
        pvp: req.body.pvp,
        status: req.body.status,
        date: req.body.date,

        published: req.body.published ? req.body.published : false
    };
    
    // Save order in the database
    Order.create(newOrder)
    .then(newOrderClient => {
        res.send(newOrderClient);
    })
    .catch(err => {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the new Order."
        });
    });
};