const { Model, DataTypes } = require('sequelize');

class Products extends Model {}

/**
 * @typedef {object} Products
 * @property {string} id 
 * @property {string} category 
 * @property {string} title 
 * @property {string} text 
 * @property {string} price 
 * @property {string} pictures
 * @property {string} amount
 * @property {boolean} active 
 * 
 */

/**
 * 
 * @param {Sequelize} sequelize - instance of sequelize
 * @returns 
 */
async function init(sequelize) {
  Products.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING,
    },
    category: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      text: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    Pictures: {
      type: DataTypes.STRING,
    },
    price: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    amount:{
        allowNull: false,
        type: DataTypes.STRING,
    },
    active:{
        allowNull: false,
        type: DataTypes.BOOLEAN,
    }  
  
  }, { 
    sequelize, 
    modelName: "Products",
    freezeTableName: true,
    timestamps: true
  });
  await Products.sync();

  return {
    /**
     * 
     * @param {Products} poducts 
     */
    async create(poducts) {
      const poduct = await Products.create(poducts);
      return poduct;
    },
    /**
     * 
     * @param {string} id 
     */
    async delete(id) {
      await Products.destroy({ 
        where: { id }
      });
    },
    /**
     * 
     * @param {Products} products 
     */
    async update(products) {
      const [_result, posts] = await products.update(products, { 
        where: { id: products.id }, 
        returning: true,
      });
      return posts[0].toJSON();
    },
    /**
     * 
     * @param {string} id 
     */
    async findById(id) {
      const post = await Products.findOne({ where: { id }, json: true });
      return post;
    },
    async findNext({ limit = 7, offset = 0 }) {
      const posts = await Products.findAll({ 
        include: "user",
        limit,
        offset
      });
      return posts.map(p => p.toJSON());
    }
  };
}

module.exports = {
  init,
  Products,
};