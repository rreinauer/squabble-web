const Sequelize = require('sequelize');
const db = require('../db');

const Opinion = db.define('opinion', {
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Opinion;
