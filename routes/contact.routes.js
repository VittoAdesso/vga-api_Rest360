module.exports = app => {
    const contact = require('../controllers/contact.controller');
    const router = require('express').Router();

    //find all contact
    router.get('/', contact.findAll);

    // find one contact 
    router.get('/:id', contact.findOne);

     // create a new contact
    router.post("/createContact", contact.create);

    //route to update an exist contact
    router.post("/updateContact/:id", contact.update);

     //route to update an exist contact
    router.delete("/deleteContact/:idUser", contact.delete);

    //define route gral
    app.use('/api/contact', router);
}

