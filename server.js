const express = require('express');
const db = require('./models'); 
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// requiero las rutas creadas 
require('./routes/user.routes')(app);
require('./routes/table.routes')(app);
require('./routes/menu.routes')(app);
require('./routes/menu_article.routes')(app);
require('./routes/order.routes')(app);
require('./routes/order_article.routes')(app);
require('./routes/article.routes')(app);
require('./routes/booking.routes')(app);

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listen on port ${PORT}`)
    })
}); 