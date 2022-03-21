const express = require('express');
const db = require('./models'); 
const PORT = process.env.PORT || 3001;

const app = express();

// SET FOLDER TO SERVER STATIC ASSETS --- if i don't write this, front give me an error to permissions cors and i cant get fecth 
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Access-Control-Allow-Headers, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization, username")
      //and remove cacheing so we get the most recent comments
      res.setHeader('Cache-Control', 'no-cache');
      next();
    });
    
    app.use(express.urlencoded({ extended : true }));
    app.use(express.json());
    
// requiero las rutas creadas 
require('./routes/user.routes')(app);
require('./routes/bill.routes')(app);
require('./routes/table.routes')(app);
require('./routes/menu.routes')(app);
require('./routes/menu_article.routes')(app);
require('./routes/order.routes')(app);
require('./routes/order_article.routes')(app);
require('./routes/order_article_two.routes')(app);
require('./routes/article.routes')(app);
require('./routes/booking.routes')(app);
require('./routes/bookingGift.routes')(app);
require('./routes/contact.routes')(app);

//config listen port 
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listen on port ${PORT}`)
    })
}); 