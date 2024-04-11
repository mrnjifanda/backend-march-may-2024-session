const countries = [
    { name: "Cameroon", currency: "XAF" },
    { name: "Canada", currency: "CAD" },
    { name: "France", currency: "EUR" }
];

function getCountryByName (name) {

    let country = null;
    for (let i = 0; i < countries.length; i++) {

        const current_country = countries[i];
        if ( current_country.name == name) {

            country = current_country;
            break
        }
        continue;
    }

    return country;
}

module.exports = { countries, getCountryByName };