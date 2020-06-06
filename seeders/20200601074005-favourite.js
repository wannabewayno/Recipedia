'use strict';

const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('favourites', [{
      user_id: 1,
      recipe_id: 1
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('favourites', null, {});
  }
};
