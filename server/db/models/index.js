const User = require('./user');
const Squabble = require('./squabble');
const Opinion = require('./opinion');

Opinion.belongsTo(User);
User.hasMany(Opinion);

User.belongsToMany(Squabble, { through: 'user-squabble' });
User.belongsToMany(Opinion, { through: 'user-votes' });

module.exports = {
  User,
  Squabble,
  Opinion,
};
