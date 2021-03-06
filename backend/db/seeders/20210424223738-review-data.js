'use strict';
const faker = require('faker')

module.exports = {
  up: (queryInterface, Sequelize) => {
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    const reviewArr = []

    for(let i = 1; i < 31; i++) {
      for(let j = 0; j < 10; j++ ) {
        reviewArr.push({
          title: faker.lorem.sentence(),
          userId: getRandom(1, 17),
          restId: i,
          content: faker.lorem.sentences(),
          rating: getRandom(2.5, 6),
        })
      }
    }

    return queryInterface.bulkInsert('Reviews', reviewArr, {});

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Reviews');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
