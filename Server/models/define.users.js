const {DataTypes} = require('sequelize')
module.exports = (sequelize, Sequelize) => {
  const users = sequelize.define("users", {
        id: {
          allowNull: false,
          primaryKey: true,
          type: DataTypes.STRING,
        },
        email: {
          allowNull: false,
          unique: true,
          type: DataTypes.STRING,
        },
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
  });  return users;
};