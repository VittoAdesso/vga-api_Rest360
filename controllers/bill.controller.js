const db = require('../models');
const Bill = db.bill;

exports.findAll = async (req, res) => {

    const bills = await Bill.findAll();

    res.send(bills);
}
