const db = require('../models');
const User = db.user;

exports.findAll = async (req, res) => {

    const users = await User.findAll();

    res.send(users);
}

exports.findOne = async (req, res) => {

    const { id } = req.params;
    
    const users = await User.findOne({
        where: {
            id
        },
    });

    res.send(users);
}

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.idUser) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a Tutorial
    const userNew = {
      idUser: req.body.idUser,
      userName: req.body.userName,
      firstName: req.body.firstName,
      password: req.body.password,
      phone: req.body.phone,
      email: req.body.email,
      dateOfBirth: req.body.dateOfBirth,
      published: req.body.published ? req.body.published : false
    };
    // Save Tutorial in the database
    User.create(userNew)
      .then(newUser => {
        res.send(newUser);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };