const schedule = require('node-schedule');
const { processNewCoinRequests } = require('./services/coinService');
const sequelize = require('./config/database');

const startService = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');

    schedule.scheduleJob('*/5 * * * *', async () => {
      console.log('Running scheduled task...');
      await processNewCoinRequests();
    });
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

startService();