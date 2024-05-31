const Currency = require('../models/Currency');
const currencyapiService = require('./api/currencyapi.service');

class CurrencyService {

    format(data) {

        const result = [];
        for (const key in data) {

            if (data.hasOwnProperty(key)) {

                const currency = data[key];
                result.push({ name: currency.name, short_code: currency.code });
            }
        }

        return result;
    }

    async currencyapi () {

        const currencies = await currencyapiService.getSupportedCurrencies();
        if (currencies.error) {

            return { error: true, data: currencies.data };
        }

        const data = this.format(currencies.data.data);
        const countCurrenciesInCollection = await Currency.countDocuments();
        if (countCurrenciesInCollection != 0) {

            await Currency.deleteMany({});
        }

        await Currency.create(data);
        return { error: false, data: data }
    }
}

module.exports = new CurrencyService();
