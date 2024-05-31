class CurrencyAPIService {

    apiKey;
    baseUrl;
    paths = {
        currency: '/v3/currencies',
        rate: '/v3/latest'
    }

    constructor () {

        this.baseUrl = process.env.CURRENCY_BASE_URL;
        this.apiKey = process.env.CURRENCY_API_KEY;
    }

    getUrl(path) {
        return this.baseUrl + this.paths[path];
    }

    getOptions(method = 'GET') {
        return {
            method,
            headers: {
                'apikey': this.apiKey,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }
    }

    async getSupportedCurrencies() {

        try {

            const request = await fetch(this.getUrl('currency') , this.getOptions());
            if (request.status === 200) {

                const response = await request.json();
                return { error: false, data: response };
            }

            return { error: true, data: request.status };
        } catch (error) {

            console.log(error);
            return { error: true, data: error.message };
        }
    }

    async getRate(from_currency, to_currency) {

        try {

            const url = this.getUrl('rate') + '?base_currency=' + from_currecy + '&currencies=' + to_currency
            const request = await fetch(url , this.getOptions());
            if (request.status === 200) {

                const response = await request.json();
                return { error: false, data: response };
            }

            return { error: true, data: request.status };
        } catch (error) {

            console.log(error);
            return { error: true, data: error.message };
        }
    }
}

module.exports = new CurrencyAPIService();
