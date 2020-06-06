'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Person', {
      first_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      last_name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true
        }
      },
      phone: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },
      // The password cannot be null
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [8]
        }
      },
      diets: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      cuisines: {
        type: Sequelize.DataTypes.STRING,
        allowNull: true,
      },
      id: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'favourites',
            // schema: 'schema'
          },
          model: {
            tableName: 'favourites',
            // schema: 'schema'
          },
          model: {
            tableName: 'mealplans',
            // schema: 'schema'
          },
          key: 'user_id'
        },
        allowNull: false
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Person');
  }
}