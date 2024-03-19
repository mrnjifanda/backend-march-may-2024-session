const http = require('http');
const port  = 3000;

const users = [
    { id: 1, name: 'Seven', email: 'seven@gmail.com' },
    { id: 2, name: 'Academy', email: 'academy@gmail.com' },
    { id: 3, name: 'Coding', email: 'coding@gmail.com' },
    { id: 4, name: 'Dojo', email: 'dojo@gmail.com' },
];

const server = http.createServer(function (request, response) {

    const url = request.url;
    if (url === '/api/users') {

        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(`<h1>HELLO</h1> ${JSON.stringify(users)}`);
    } else {

        if (url === '/') {
            response.end('Hello boy')
        } else if (url === '/contact') {
            response.end('Welcom on my contact us page ')
        } else if (url === '/about') {
            response.end('All my informations')
        } else {
            response.end('404 Not Found');
        }
    }
});

server.listen(port, function () {
    console.log('Server running on: http://localhost:'+ port);
});