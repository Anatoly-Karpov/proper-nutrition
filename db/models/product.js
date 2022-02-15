const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      // define association here
      this.belongsTo(User, { foreignKey: 'user_id' });
    }
  }
  Product.init({
    food_name: DataTypes.STRING,
    serving_qty: DataTypes.STRING,
    serving_weight_grams: DataTypes.STRING,
    nf_calories: DataTypes.STRING,
    nf_total_fat: DataTypes.STRING,
    nf_saturated_fat: DataTypes.STRING,
    nf_cholesterol: DataTypes.STRING,
    nf_sodium: DataTypes.STRING,
    nf_total_carbohydrate: DataTypes.STRING,
    nf_dietary_fiber: DataTypes.STRING,
    nf_sugars: DataTypes.STRING,
    nf_protein: DataTypes.STRING,
    nf_potassium: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};
