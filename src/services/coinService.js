const NewCoinRequest = require('../models/newCoinRequest');
const CoinInfo = require('../models/coinInfo');
const { getCoinPrice } = require('../utils/coinMarketCapApi');

const processNewCoinRequests = async () => {
  const approvedRequests = await NewCoinRequest.findAll({ where: { status: 'approved' } });

  for (const request of approvedRequests) {
    const price = await getCoinPrice(request.symbol);

    await CoinInfo.create({
      name: request.name,
      symbol: request.symbol,
      price,
    });

    await request.update({ status: 'added' });
  }
};

module.exports = { processNewCoinRequests };