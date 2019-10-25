const Sequelize = require('sequelize');
const db = require('../db');

const Votes = db.define('votes', {
  title: {
    type: Sequelize.STRING,
  },
});

module.exports = Votes;
