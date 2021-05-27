'use strict';

const { Sequelize } = require("sequelize");
// const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

const sequelize = new Sequelize(config.url) // Example for postgres
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

require("./model.users").init(sequelize);
require("./model.product").init(sequelize);
db.User =require('./model.users').User
db.Product =require('./model.product').Products

// db.User = require("./define.users")(sequelize, Sequelize);

module.exports = db;
