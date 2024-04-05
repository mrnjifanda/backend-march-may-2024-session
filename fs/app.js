const fs = require('fs');
fs.readFile('./text.txt', 'utf-8', function (error, data) {
    console.log(1);
    console.log(data);
});

const data = fs.readFileSync('./text.txt', 'utf-8');
console.log(data);

console.log(2);
console.log('Second action');