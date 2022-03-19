const db = require('../models');
const OrderArticle = db.orderArticle;

exports.findAll = async (req, res) => {

    const orderArticle = await OrderArticle.findAll();

    res.send(orderArticle);
}

// findOne un id, controlando errores en case que no encuentre uno existente 
exports.findOne = async (req, res) => {

    const idOrder = req.params.idOrder; 
  
    try { 
      const order = await OrderArticle.findOne({
        where: {
                idOrder : idOrder,
        },
      });
  
    if (order) { 
      return res.status(200).json(order);} 
  
      else { 
        return res.status(404).json('No order article found by this idOrder'); } 
    
    } 
  
    catch (err) { return res.status(500).json(err); } 
  
  };

  // findOne un idOrder, el cuál no es Pk, ni first column in msql, is another one , controlando errores en case que no encuentre uno existente 
