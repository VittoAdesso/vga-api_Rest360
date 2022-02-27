const db = require('../models');
const User = db.user;

exports.findAll = async (req, res) => {

    const users = await User.findAll();

    res.send(users);
}

exports.findOne = async (req, res) => {

    const { id } = req.params;
    
    const user = await User.findOne({
        where: {
            id
        },
    });

    res.send(user);
}