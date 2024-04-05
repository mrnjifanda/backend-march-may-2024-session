const Events = require('events');
const eventEmitter = new Events();

function userEmail (email) {

    console.log("Say hello to " + email);
}

function adminEmail (email) {

    console.log("This is admin event: " + email);
}

eventEmitter.on("new-user", userEmail);

const array_of_emails = [
    "seven_1@example.com", "seven_2@example.com",
    "admin@example.com",
    "seven_3@example.com", "seven_4@example.com"
];

// array_of_emails.forEach(email => {

//     if (email === "admin@example.com") {

//         eventEmitter.removeListener("new-user", userEmail)
//         eventEmitter.on("new-user", adminEmail)
//     }

//     eventEmitter.emit("new-user", email);
// });


eventEmitter.once("one-time", () => {
    console.log("One time call");
});

eventEmitter.emit("one-time");
eventEmitter.emit("one-time");
eventEmitter.emit("one-time");
eventEmitter.emit("one-time");
eventEmitter.emit("one-time");
