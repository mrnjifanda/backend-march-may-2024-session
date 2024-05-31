const currencyServise = require('../services/currency.service'); 

const find = async (req, res, next) => {}

const getFromCurrencyapi = async (req, res, next) => {

    const currencies = await currencyServise.currencyapi();
    if (currencies.error) {

        return res.status(500).json({ error: true, data: currencies.data });
    }

    return res.status(200).json({ error: false, data: currencies.data });
}

module.exports = { find, getFromCurrencyapi };
