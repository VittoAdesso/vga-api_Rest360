const db = require('../models');
const Contact = db.contact;

// to find all contacts 
exports.findAll = async (req, res) => {
    const contacts = await Contact.findAll();
    res.send(contacts);
}

// findOne un id, controlando errores en case que no encuentre uno existente 
exports.findOne = async (req, res) => {
  const id = req.params.id; 
  try { 
    const contact = await Contact.findOne({
      where: {
          id 
      },
    });

  if (contact) { 
    return res.status(200).json(contact);} 
    else { 
      return res.status(404).json('No Contact found by this id'); } 
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
    // Create a new Contact
    const newContact = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone:req.body.phone,
      email: req.body.email,
      anyComment: req.body.comment,
      hasDiscount: req.body.discount,
      isContacted: req.body.contacted,

      published: req.body.published ? req.body.published : false
    };
        // Save user in the database
    Contact.create(newContact)
      .then(newpeople => {
        res.send(newpeople);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the new Contact."
        });
      });
  };

   //to update booking 

exports.update = (req, res) => {
    const id = req.params.id;
    Contact.update(req.body, {
      where: { id }
    })
      .then(newOne => {
        if (newOne == 1) {
          res.send({
            message: "Contact was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Contact with id=${id}. Maybe Contact was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Contact with id=" + id
        });
      });
  };

  // to delete one
exports.delete = (req, res) => {
    const id = req.params.id;
      Contact.destroy({
      // i dont have to write where { id : id} because in js while doesnt have an other valor, i dont have to duplicate 
      where: { id }
    })
      .then(contactdelete => {
        if (contactdelete == 1) {
          res.send({
            message: "Contact was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Contact with id=" + id
        });
      });
  };
