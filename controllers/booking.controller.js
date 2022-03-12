const db = require('../models');
const Booking = db.booking;

exports.findAll = async (req, res) => {

    const bookings = await Booking.findAll();

    res.send(bookings);
}

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
      idReserva: req.body.idReserva,
      date: req.body.date,
      hour: req.body.hour,
      numPerson: req.body.numPerson,
      name: req.body.name,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      allergic: req.body.allergic,
      text: req.body.text,
      ofertas: req.body.ofertas,
      confirmacion: req.body.confirmacion,

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