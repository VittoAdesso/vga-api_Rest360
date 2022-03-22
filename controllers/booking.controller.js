const db = require('../models');
const Booking = db.booking;

// to fin all and get all items
exports.findAll = async (req, res) => {
    const bookings = await Booking.findAll();
      res.send(bookings);
}

// to create a new one 

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.idReserva) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a new Booking
    const bookingNew = {
      date: req.body.date,
      hour: req.body.hour,
      numPerson: req.body.numPerson,
      name: req.body.name,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      isAllergic: req.body.allergic,
      text: req.body.text,
      disccount: req.body.ofertas,
      confirmation: req.body.confirmacion,

      published: req.body.published ? req.body.published : false
    };
    
    // Save booking in the database
    Booking.create(bookingNew)
      .then(newBooking => {
        res.send(newBooking);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the new booking."
        });
      });
  };

  //to update booking 

  exports.update = (req, res) => {
    const id = req.params.id;
    Booking.update(req.body, {
      where: { id }
    })
      .then(book => {
        if (book == 1) {
          res.send({
            message: "Booking was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Booking with id=${id}. Maybe Booking was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Booking with id=" + id
        });
      });
  };

  // to delete one
  
  exports.delete = (req, res) => {
    const id = req.params.id;
    Booking.destroy({
      where: { id }
    })
      .then(book => {
        if (book == 1) {
          res.send({
            message: "Booking was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Booking with id=${id}. Maybe Booking was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Booking with id=" + id
        });
      });
  };