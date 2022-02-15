'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      food_name: {
        type: Sequelize.STRING
      },
      serving_qty: {
        type: Sequelize.STRING
      },
      serving_weight_grams: {
        type: Sequelize.STRING
      },
      nf_calories: {
        type: Sequelize.STRING
      },
      nf_total_fat: {
        type: Sequelize.STRING
      },
      nf_saturated_fat: {
        type: Sequelize.STRING
      },
      nf_cholesterol: {
        type: Sequelize.STRING
      },
      nf_sodium: {
        type: Sequelize.STRING
      },
      nf_total_carbohydrate: {
        type: Sequelize.STRING
      },
      nf_dietary_fiber: {
        type: Sequelize.STRING
      },
      nf_sugars: {
        type: Sequelize.STRING
      },
      nf_protein: {
        type: Sequelize.STRING
      },
      nf_potassium: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};
