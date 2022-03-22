const { Op } = require ('sequelize') ; 
const db = require('../models');
const Order = db.order;
const Article = db.article;
const User = db.user;
const OrderArticle = db.orderArticle;


exports.findAll = async  (req, res) => {
    const { isActive } = req.query;
    const query = isActive && { where: {
            status : { [Op.or] : [ 0,1,2,3 ]}
    }}
    const orders = await Order.findAll(query);
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
}

// method to create a new one
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.status) {
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
        userId: req.body.userId,
        articlesIds: req.body.articlesIds
        };
        // Save order in the database
    try{
        const result = await Order.create(newOrder); 
        const articles = await Article.findAll({
        where: {
            id : newOrder.articlesIds
        }
    })
    // create a new const to map array and make a spred operator
        const orderArticles = articles.map((article) =>{
            return {
            // i make a destructuring and take inputs to fill table ordeer_article
            // sequelize when return data insert into "dataValues --- always !! "
            ...article.dataValues, 
                orderId: result.id, 
                articleId: article.id
        }}); 
    // create and fill table is a function
    await OrderArticle.bulkCreate(orderArticles);
        res.send(result);
    }
    catch(err) {
        res.status(500).send({
        message:
            err.message || "Some error occurred while creating the new Order."
        });
    };
}

// method to update a new one
exports.updateStatus = async (req, res) =>{
    // Validate request
    if (!req.body.status) {
    res.status(400).send({
        message: "Content can not be empty!"
    });
    return;
    }
    // Create a new order
    const existOrder = {
        status: req.body.status,
    };
    const { id } = req.params;     
    try{
        // Save order in the database
       await Order.update(existOrder, {
            where: {
                id 
            }
        })
        const result = await Order.findOne({
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
        res.send(result);
    }
    catch(err){
        return res.status(500).send({
            message: err
        });
        }  
}

// // findOne id, controlling errors in case dont find an exist one (WITHOUT ASSOCIATION)
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
