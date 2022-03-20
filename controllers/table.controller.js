const db = require('../models');
const Table = db.table;

exports.findAll = async (req, res) => {

    const tables = await Table.findAll();

    res.send(tables);
}

// findOne id, controlling if dont find one
exports.findOne = async (req, res) => {

    const id = req.params.id; 
  
    try { 
      const table = await Table.findOne({
        where: {
                id 
        },
      });
  
    if (table) { 
      return res.status(200).json(table);} 
  
      else { 
        return res.status(404).json('No table found by this id'); } 
    
    } 
  
    catch (err) { return res.status(500).json(err); } 
  
  };