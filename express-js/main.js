const express = require('express');
const db = require('./db.json');
const app = express();

app.get('/api/users', (request, response) => {

    response.json(db);
});

app.put('/api/users/:id', (request, response) => {
    const params = request.params;
    const id = params.id;
    let user = null;
    for (let index = 0; index < db.length; index++) {
        const element = db[index];
        if (element.id == id) {
            user = element;
            break;
        }
        continue;
    }

    if (user) {
        response.json(user);
    } else {
        response.send("User not found")
    }
});

app.listen(3000, () => {
    console.log("Applicatio running on http://localhost:3000"); 
});