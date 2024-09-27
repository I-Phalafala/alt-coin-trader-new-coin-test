const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const NewCoinRequest = sequelize.define('NewCoinRequest', {
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
  status: {
    type: DataTypes.ENUM('new', 'pending', 'rejected', 'approved', 'added'),
    allowNull: false,
  },
}, {
  tableName: 'new_coin_request',
  timestamps: false,
});

module.exports = NewCoinRequest;