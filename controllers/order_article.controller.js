const db = require('../models');
const OrderArticle = db.orderArticle;

//FINDING ALL
exports.findAll = async (req, res) => {

    const orderArticles = await OrderArticle.findAll();

    res.send(orderArticles);
}

// findOne un id, controlando errores en case que no encuentre uno existente 
exports.findOne = async (req, res) => {

    const id = req.params.id; 
    try { 
      const orderId = await OrderArticle.findOne({
        where: {
                id : id,
        },
      });
  
    if (orderId) { 
      return res.status(200).json(orderId);} 
        else { 
        return res.status(404).json('No order article found by this id'); } 
        } 
  
    catch (err) { return res.status(500).json(err); } 
};

  // FINDall idOrder, el cuál no es Pk, ni first column in msql, is another one , controlando errores en case que no encuentre uno existente (ojo, que tengan el mismo idOrder)
  exports.findAll = async (req, res) => {

    const idOrder = req.params.idOrder; 
    try { 
      const order = await OrderArticle.findAll({
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