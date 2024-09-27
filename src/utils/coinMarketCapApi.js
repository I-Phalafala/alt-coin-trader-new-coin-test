const axios = require('axios');
const env = require('../config/env');

const getCoinPrice = async (symbol) => {
  const url = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=${symbol}&convert=USD`;
  const response = await axios.get(url, {
    headers: {
      'X-CMC_PRO_API_KEY': env.COINMARKETCAP_API_KEY,
    },
  });
  return response.data.data[symbol].quote.USD.price;
};

module.exports = { getCoinPrice };