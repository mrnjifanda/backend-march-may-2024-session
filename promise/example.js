const fs = require('fs');

// Callback Syntax
fs.readFile('./data.txt', 'utf-8', (error, result) => {

    if (error) {

        console.log("This read file have error", error);
    } else {

        console.log("Read OK: ", result);
    }
})

// The Promise syntax
// fs.readFile('./data.txt', 'utf-8').then(data => {
//     console.log("Promise resolved: ", data);
// }).catch(error => {
//     console.log("Promise rejected: ", error);
// }) 

// async / await syntax
async function AsynAwait () {

    try {
        const result = fs.readFileSync('./data.txt', 'utf-8');
        console.log('Asyn/await result: ', result);
    } catch (error) {
        console.log('Asyn/await error: ', error);
    }
}

AsynAwait();