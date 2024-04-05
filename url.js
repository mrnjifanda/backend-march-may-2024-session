const url = require('url');

const parseURL = url.parse('http://www.google.com/search?q=cars&device=mobile');
console.log(parseURL);

const getUrl = url.format({
    protocol: 'http',
    hostname: 'www.google.com',
    pathname: '/search',
    query: {
        q: 'cars',
        device:'mobile'
    }
});

console.log(getUrl);


// Another method with URL class
const myURL = new URL('http://www.exemple.com/page#main?name=Monica&status=assistant')

myURL.searchParams.set('name', 'Seven');
myURL.searchParams.append('lang', 'fr_FR');
myURL.searchParams.delete('device');

console.log(myURL);