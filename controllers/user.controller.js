const db = require('../models');
const User = db.user;
//i have to import incluede findOne
const Order = db.order;

// have to require librarys to
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// create a constant to config data (is secret )
const authConfig = { 
  secret: "vga", 
  expires: "24h",
  rounds: 10
};

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
    if (!req.body.email && !req.body.password) {
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
    };
  // Encriptamos la contraseña
    userNew.password = bcrypt.hashSync(req.body.password, Number.parseInt(authConfig.rounds));
        // Crear un usuario
    User.create(userNew)
          .then(user => {
        // create token
          let token = jwt.sign({ user: user }, authConfig.secret, {
                  expiresIn: 10
          });
          res.json({
            user: user,
            token: token
          });
        }).catch(err => {
            res.status(500).json(err);
        });
};

   //to update user 
exports.update = (req, res) => {
    const id = req.params.id;
    User.update(req.body, {
      where: { id }
    })
      .then(user => {
        if (user == 1) {
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


// to loggin 
exports.login = async (req, res, next) => {
  let { email, password } = req.body;
  // Buscar usuario
  User.findOne({
      where: {
          email: email
      }
  }).then(user => {
      if (!user) {
          res.status(404).json({ msg: "Can't found User & password" });
      } else {
          if (bcrypt.compareSync(password, user.password)) {
              // Creamos el token
              let token = jwt.sign({ user: user }, authConfig.secret, {
                  expiresIn: authConfig.expires
              });

              res.json({
                  user: user,
                  token: token
              })
          } else {
              // Unauthorized Access
              res.status(401).json({ msg: "Invalid Password" })
          }
      }
  }).catch(err => {
      res.status(500).json(err);
  })
}
