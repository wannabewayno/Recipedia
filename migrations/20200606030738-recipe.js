'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('recipes', {
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      description: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      ingredients: {
        type: Sequelize.DataTypes.JSON,
        allowNull: false,
      },
      servings: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      instructions: {
        type: Sequelize.DataTypes.JSON,
        allowNull: false,
      },
      created_by: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
      },
      tags: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: Sequelize.DataTypes.TEXT,
        allowNull: true
      },
      prep_time: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      cook_time: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false
      },
      cuisine: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true
      },
      diets: {
        type: Sequelize.DataTypes.JSON,
        allowNull: true
      },
      created_by: {
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
      id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'favourites',
            // schema: 'schema'
          },
          model: {
            tableName: 'mealplans',
            // schema: 'schema'
          },
          key: 'recipe_id'
        },
        allowNull: false
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
}