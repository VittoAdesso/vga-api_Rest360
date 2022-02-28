const db = require('../models');
const MenuAticle = db.user;

exports.findAll = async (req, res) => {

    const menusAticles = await MenuAticle.findAll();

    res.send(menusAticles);
}

