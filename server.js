const express = require('express');
const db = require('./models'); 
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended : true }));
app.use(express.json());

//requirto las rutas creadas 
require('./routes/user.routes')(app);
require('./routes/table.routes')(app);



db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Listen on port ${PORT}`)
    })
}); 