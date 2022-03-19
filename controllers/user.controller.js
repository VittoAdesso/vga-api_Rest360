const db = require('../models');
const User = db.user;

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

exports.findAll = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
}

// findOne un id, controlando errores en case que no encuentre uno existente 
exports.findOne = async (req, res) => {

  const id = req.params.id; 

  try { 
    const user = await User.findOne({
      where: {
        id : id,
      },
    });

  if (user) { 
    return res.status(200).json(user);} 

    else { 
      return res.status(404).json('No User found by this id'); } 
    } 
  catch (err) { return res.status(500).json(err); } 
};

// method to have query to create a new one
exports.create = async (req, res) => {
    // Validate request
    if (!req.body.idUser) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a new User
    const userNew = {
      idUser: req.body.idUser,
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      password: req.body.password,
      phone: req.body.phone,
      email: req.body.email,
      dateOfBirth: req.body.dateOfBirth,
      published: req.body.published ? req.body.published : false
    };
    
    // Save user in the database
    User.create(userNew)
      .then(newUser => {
        res.send(newUser);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the new User."
        });
      });
  };


// function to login and comprueba user exist (modo básico sin jwt ni bcrypt)
exports.login = async (req, res) => {

  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await User.findOne({
      where: {
        email : email,
        password : password,
      },
    });

  if (user) { 
    return res.status(200).json(user);} 
    else { 
      return res.status(404).json('No User found, please try again'); } 
      } catch (err) {

  }
}

// exports.login = async (req, res, next) => {

//     let getUser;
//     User.findOne({
//         email: req.body.email
//     }).then(user => {
//         if (!user) {
//             return res.status(401).json({
//                 message: "Authentication failed"
//             });
//         }
//         getUser = user;
//         return bcrypt.compare(req.body.password, user.password);
//     }).then(response => {
//         if (!response) {
//             return res.status(401).json({
//                 message: "Authentication failed"
//             });
//         }
//         let jwtToken = jwt.sign({
//             email: getUser.email,
//             id: getUser.id
//         }, "longer-secret-is-better", {
//             expiresIn: "1h"
//         });
//         res.status(200).json({
//             token: jwtToken,
//             expiresIn: 3600,
//             id: getUser.id
            
//         });
//     }).catch(err => {
//         return res.status(401).json({
//             message: "Authentication failed"
//         });
//     });
// }
