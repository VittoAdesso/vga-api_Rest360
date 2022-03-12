const db = require('../models');
const BookingGift = db.bookingGift;

exports.findAll = async (req, res) => {

    const bookingsGift = await BookingGift.findAll();

    res.send(bookingsGift);
}

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.idReserva) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a new Booking Gift
    const bookGifNew = {
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
    
    // Save booking gift in the database
    User.create(bookGifNew)
      .then(newBookGift => {
        res.send(newBookGift);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the new Booking gift."
        });
      });
  };
