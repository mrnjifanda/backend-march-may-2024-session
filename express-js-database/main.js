const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const port = process.env.PORT;

mongoose.connect(process.env.DATABASE_URL)
.then(connection => {

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    const indexRoute = require('./routes/index.route');
    const tasksRoute = require('./routes/tasks.route');
    const authRoute = require('./routes/auth.route');

    app.use('/', indexRoute);
    app.use('/tasks', tasksRoute);
    app.use('/auth', authRoute);

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})
.catch(error => {
    throw new Error("Database connection error: " + error);
});