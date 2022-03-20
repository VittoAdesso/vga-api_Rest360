const db = require('../models');
const OrderArticle = db.orderArticle;

//FINDING ALL
exports.findAll = async (req, res) => {

  const orders = await OrderArticle.findAll();

  res.send(orders);
}

// findOne  id, controllin errors in case dont find one  
exports.findOne = async (req, res) => {

    const id = req.params.id; 
    try { 
      const orderId = await OrderArticle.findOne({
        where: {
                id 
        },
      });
  
    if (orderId) { 
      return res.status(200).json(orderId);} 
        else { 
        return res.status(404).json('No order article found by this id'); } 
        } 
  
    catch (err) { return res.status(500).json(err); } 
};

  // FINDall idOrder, is Pk, no first column in msql, is another one , controlling errors in case dont find an exist one (eye, idOrder the samne)
  exports.findAll = async (req, res) => {

    const idOrder = req.params.idOrder; 
    try { 
      const order = await OrderArticle.findAll({
        where: {
                idOrder 
        },
      });
  
    if (order) { 
      return res.status(200).json(order);} 
      else { 
        return res.status(404).json('No order article found by this idOrder'); } 
    } 
  catch (err) { return res.status(500).json(err); } 
  
  };