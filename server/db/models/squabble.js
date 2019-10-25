const Sequelize = require('sequelize');
const db = require('../db');

const Squabble = db.define('squabble', {
  title: {
    type: Sequelize.STRING,
  },
});

module.exports = Squabble;
