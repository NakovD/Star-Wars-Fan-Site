require('dotenv').config();
const readyApp = require('./config/routes.js');
const mongoose = require('mongoose');
const config = require('./config/env_var.js')[process.env.NODE_ENV];


const startDBAndApp = async function () {
    await mongoose.connect(config.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, }, (err) => {
        if (err) {
            throw (err);
        }
        console.log('DB is up and running!');
    })
    readyApp.listen(config.PORT, console.log(`Server is up and running on port:${config.PORT}!`));
}();
