'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
    meal_slot: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
    },
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
            // schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
    recipe_id: {
      type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'recipes',
            // schema: 'schema'
          },
          key: 'id'
        },
        allowNull: false
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
}