const db = require('../models');
const OrderArticle = db.orderArticle;

exports.findAll = async (req, res) => {

    const orderArticle = await OrderArticle.findAll();

    res.send(orderArticle);
}

// findOne un id, controlando errores en case que no encuentre uno existente 
exports.findOne = async (req, res) => {

    const id = req.params.id; 
  
    try { 
      const order = await OrderArticle.findOne({
        where: {
                id : id,
        },
      });
  
    if (order) { 
      return res.status(200).json(order);} 
  
      else { 
        return res.status(404).json('No order article found by this id'); } 
    
    } 
  
    catch (err) { return res.status(500).json(err); } 
  
  };