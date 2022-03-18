const db = require('../models');
const Order = db.order;

exports.findAll = async (req, res) => {

    const orders = await Order.findAll();

    res.send(orders);
}

// findOne un idOrder, el cuál no es Pk, ni first column in msql, is another one , controlando errores en case que no encuentre uno existente 
exports.findOne = async (req, res) => {

    const idOrder = req.params.idOrder; 
    try { 
      const order = await Order.findOne({
        where: {
                idOrder : idOrder,
        },
      });
  
    if (order) { 
      return res.status(200).json(order);} 
  
      else { 
        return res.status(404).json('No Order found by this idOrder'); } 
      } 
    catch (err) { return res.status(500).json(err); } 
  };

