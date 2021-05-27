
module.exports = (sequelize, Sequelize) => {
  sequelize.sync();

  const users = sequelize.define("users", {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.DataTypes.STRING,
    },
    email: {
      allowNull: false,
      unique: true,
      type: Sequelize.DataTypes.STRING,
    },
    name: {
      allowNull: false,
      type: Sequelize.DataTypes.STRING,
    },
    PhoneNumber:{
      unique: true,
      type: Sequelize.DataTypes.STRING,
    }
  }); return users;


};