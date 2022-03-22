const db = require('../models');
const BookingGift = db.bookingGift;

exports.findAll = async (req, res) => {

    const bookingsGift = await BookingGift.findAll();

    res.send(bookingsGift);
}

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a new Booking Gift
    const bookGifNew = {
        codigo: req.body.codigo,
        typeGift: req.body.typeGift,
        numPerson: req.body.numPerson,
        cost: req.body.cost,
        dateBuy: req.body.dateBuy,
        dateConsume: req.body.dateConsume,
        valid: req.body.valid,
    };
    
    // Save booking gift in the database
    BookingGift.create(bookGifNew)
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
