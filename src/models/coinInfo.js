const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const CoinInfo = sequelize.define('CoinInfo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  symbol: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'coin_info',
  timestamps: false,
});

module.exports = CoinInfo;