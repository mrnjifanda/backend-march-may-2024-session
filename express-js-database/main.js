const express = require('express');
const mongoose = require('mongoose');
const port = 3000;

mongoose.connect("mongodb://localhost:27017/level5_tasks_management")
.then(connection => {

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    const indexRoute = require('./routes/index.route');
    const tasksRoute = require('./routes/tasks.route');

    app.use('/', indexRoute);
    app.use('/tasks', tasksRoute);

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
})
.catch(error => {
    throw new Error("Database connection error: " + error);
});