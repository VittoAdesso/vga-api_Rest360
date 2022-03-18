const db = require('../models');
const Bill = db.bill;

exports.findAll = async (req, res) => {

    const bills = await Bill.findAll();

    res.send(bills);
}

// findOne un id, controlando errores en case que no encuentre uno existente 
exports.findOne = async (req, res) => {

    const id = req.params.id; 
    try { 
    const bill = await Bill.findOne({
        where: {
            id : id,
        },
    });

    if (bill) { 
    return res.status(200).json(bill);} 
        else { 
        return res.status(404).json('No bill found by this id'); } 
        } 
    catch (err) { return res.status(500).json(err); } 
};
