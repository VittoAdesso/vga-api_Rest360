const db = require('../models');
const Bill = db.bill;

exports.findAll = async (req, res) => {

    const bills = await Bill.findAll();

    res.send(bills);
}

// findOne  id, controlling errors in case dont found and existe one 
exports.findOne = async (req, res) => {

    const id = req.params.id; 
    try { 
    const bill = await Bill.findOne({
        where: {
            id 
        },
    });

    if (bill) { 
    return res.status(200).json(bill);} 
        else { 
        return res.status(404).json('No bill found by this id'); } 
        } 
    catch (err) { return res.status(500).json(err); } 
};

// method to have query to create a new one
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a new Bill
    const newBill = {
        idTicket: req.body.idTicket,
        idDestino: req.body.idDestino,
        idOrder:req.body.idOrder,
        comensales: req.body.comensales,
        cost: req.body.cost,
        iva: req.body.iva,
        pvp: req.body.pvp,
        pagado: req.body.pagado,
    };
    
    // Save Bill in the database
    Bill.create(newBill)
    .then(bill => {
        res.send(bill);
    })
    .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the new Bill."
        });
    });
};

