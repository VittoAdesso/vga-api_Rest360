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
