const db = require('../models');
const Table = db.table;

exports.findAll = async (req, res) => {

    const tables = await Table.findAll();

    res.send(tables);
}

exports.findOne = async (req, res) => {

    const { id } = req.params;
    
    const table = await Table.findOne({
        where: {
            id
        },
    });

    res.send(table);
}