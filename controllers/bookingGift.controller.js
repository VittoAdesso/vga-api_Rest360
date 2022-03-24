const db = require('../models');
const BookingGift = db.bookingGift;

exports.findAll = async (req, res) => {
    const bookingsGift = await BookingGift.findAll();
      res.send(bookingsGift);
}

exports.create = async (req, res) => {
    // Validate request
    if (!req.body.dateBuy) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a new Booking Gift
    const bookGifNew = {
        codigo: req.body.codigo,
        typeGift: req.body.typeGift,
        numPersonas: req.body.numPerson,
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

  //to update booking 

exports.update = (req, res) => {
    const id = req.params.id;
    BookingGift.update(req.body, {
      where: { id }
    })
      .then(bookGift => {
        if (bookGift == 1) {
          res.send({
            message: "BookingGift was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update BookingGift with id=${id}. Maybe BookingGift was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating BookingGift with id=" + id
        });
      });
  };
