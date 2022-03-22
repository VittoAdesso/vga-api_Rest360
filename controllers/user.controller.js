const db = require('../models');
const User = db.user;
//i have to import incluede findOne
const Order = db.order;

// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");

// to find all users 
exports.findAll = async (req, res) => {
    const users = await User.findAll();
    res.send(users);
}

// findOne by id, controlling errors in case dont find an exist one
exports.findOne = async (req, res) => {

  const id = req.params.id; 

  try { 
    const user = await User.findOne({
      include: [{
        model: Order,
        as: "orders"
    }],
      where: {
        id 
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
    if (!req.body.id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a new User
    const userNew = {
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

   //to update booking 

exports.update = (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
      where: { id }
    })
      .then(book => {
        if (book == 1) {
          res.send({
            message: "User was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };

  // to delete one
exports.delete = (req, res) => {
    const id = req.params.id;
    
    User.destroy({
      // i dont have to write where { id : id} because in js while doesnt have an other valor, i dont have to duplicate 
      where: { id }
    })
      .then(user => {
        if (user == 1) {
          res.send({
            message: "User was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete User with id=${id}. Maybe User was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
        });
      });
  };

// function to login and verify user exist (basic mode without jwt & bcrypt)
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


// // 1 option 
// exports.login = async (req, res, next) => {

//     let getUser;
//     User.findOne(req.body, {

//       where: {
//         email: req.body.email,
//         password: req.body.password
//       }
        
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


// // 2 option 
// exports.login = async (req, res, next) => {

//     let getUser;
//     User.findOne({
//       where : {
//         email: req.body.email,
//         password: req.body.password,
//       }
        
//     }).then(user => {
//         if (!user) {
//             return res.status(401).json({
//                 message: "Authentication failed - user not found"
//             });
//         }
//         getUser = user;
//         return bcrypt.compare(req.body.password, user.password);
//     }).then(response => {
//         if (!response) {
//             return res.status(401).json({
//                 message: "Authentication and response failed"
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
