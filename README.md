# alt-coin-trader-new-coin-test
My second, more refined attempt at ACT's new coin service test. During my first attempt I was using an endpoint which had been discontinued to fetch price data. But now that im using the correct one it works flawlessly.

This project is a Node.js service that manages new coin requests. It reads approved new coin requests from a database, fetches their current price from CoinMarketCap, adds them to a `coin_info` table, and updates their status. The service runs on a schedule every 5 minutes.

# Project Details
Database Configuration
  The database configuration is located in src/config/database.js. It uses Sequelize to connect to a Microsoft SQL Server database.

Models
  newCoinRequest.js: Defines the new_coin_request table structure.
  coinInfo.js: Defines the coin_info table structure.
Services
  coinService.js: Contains the logic to process new coin requests, fetch current prices from CoinMarketCap, add new coins to the coin_info table, and update the status of the new coin requests.
Utils
  coinMarketCapApi.js: Contains the function to fetch current coin prices from the CoinMarketCap API.
  
Scheduled Task
The scheduled task is set up in src/index.js using node-schedule to run every 5 minutes.


## Requirements

- Node.js
- Microsoft SQL Server
- CoinMarketCap API Key

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/I-Phalafala/alt-coin-trader-new-coin-test.git
   cd coin-service
2. Install the dependencies:
   npm install
3. Create a .env file in the root directory and add your configuration:
DB_HOST=localhost
DB_USER=yourusername
DB_PASS=yourpassword
DB_NAME=yourdatabase
COINMARKETCAP_API_KEY=yourapikey

# Usage

1. Start the service:
  npm start
The service will run on a schedule every 5 minutes to process new coin requests.


