const db = require('../models');
const Menu = db.user;

exports.findAll = async (req, res) => {

    const menus = await Menu.findAll();

    res.send(menus);
}

// exports.findOne = async (req, res) => {

//     const { id } = req.params;
    
//     const menus = await Menu.findOne({
//         where: {
//             id
//         },
//     });

//     res.send(menus);
// }