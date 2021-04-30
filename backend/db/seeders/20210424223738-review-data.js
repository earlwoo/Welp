'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }

    const reviewArr = []

    const titlesArr = [
      "My Review",
      "Lovely Dinner",
      "The Best",
      "Average"
    ]

    const contentArr = [
      "Friendly Staff",
      "Food was bland, my sprite was not carbonated",
      "Exceeded expectations",
      "Absolutely blew me away",
      "My go to spot",
      "I'll be coming back"
    ]


    for(let i = 0; i < 100; i++) {
        reviewArr.push({
          title: titlesArr[getRandom(0, 4)],
          userId: getRandom(1, 4),
          restId: getRandom(1, 21),
          content: contentArr[getRandom(0, 6)],
          rating: getRandom(2, 6),
        })
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
