'use strict';

// sequelize db:seed:all ---  sequelize db:seed:all                       Run every seeder

const faker = require('faker');

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */

    let ingredients = [faker.lorem.word(), faker.lorem.word()]
    
   return queryInterface.bulkInsert('recipes', [{
    // id: 2,
    name: faker.lorem.words(),
    ingredients: JSON.stringify(ingredients),
    servings: faker.random.number(),
    instructions: JSON.stringify(faker.lorem.paragraphs()),
    created_by: 1,
    tags: "ingredients",
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete("recipes", null, {});
  }
};
