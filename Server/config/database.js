const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('postgres://yknqmxbs:WMcso07Jv0xV9U5xIEQP4FernRMl2kZx@tai.db.elephantsql.com/yknqmxbs') // Example for postgres
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}


