const { countries, getCountryByName } = require('./modules/countries');
const country = "Canada";

const check = getCountryByName(country);

console.log(check);
console.log(countries);