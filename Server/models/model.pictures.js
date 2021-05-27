const { Model, DataTypes } = require('sequelize');


class Pictures extends Model { }

/**
 * @typedef {object} Pictures
 * @property {string} id
 * @property {string} idProduct 
 * @property {string} pictures 
 * 
 */

/**
 * 
 * @param {Sequelize} sequelize - instance of sequelize
 */
async function init(sequelize) {
  Pictures.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    idProduct: {
        allowNull: false,
        type: DataTypes.STRING,
   }, 
    pictures: {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING,
    },
  }, {
    sequelize,
    modelName: "pictures",
    freezeTableName: true,
    timestamps: true
  });
  await Pictures.sync();

  return {
    /**
     * 
     * @param {Pictures} picturesData 
     */
    async create(picturesData) {
      const pictures = await Pictures.create(picturesData);
      return pictures.toJSON();
    },
    /**
     * 
     * @param {string} id 
     */
    async delete(id) {
      const rowsDelete = await Pictures.destroy({
        where: { id }
      })
      return rowsDelete === 1;
    },
    /**
     * 
     * @param {string} id 
     * @returns Promise<User>
     */
    async findById(id) {
      const pictures = await Pictures.findOne({ where: { id } });
      return pictures;
    },
    /**
     * @param {Pictures} picturesData
     * @param {string[]} fields
     */
    async update(picturesData, fields) {
      const [_result, pictures] = await db.user.update(picturesData, {
        where: { id: picturesData.id },
        returning: true,
        fields
      });
      return pictures[0].toJSON();
    }
  };
}

module.exports = {
  init,
  Pictures
};
