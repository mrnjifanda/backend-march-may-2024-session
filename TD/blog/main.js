require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const port = process.env.APP_PORT;
const database = process.env.DATABASE_URL;

mongoose.connect(database).then(() => {

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false}));

    const authRoute = require('./routes/auth.route');
    
    app.use('/api/auth', authRoute);

    app.listen(port, () => {
        console.log('Application listening on http://localhost:' + port);
    });
})
// .catch(error => {

//     console.log(error);
// });