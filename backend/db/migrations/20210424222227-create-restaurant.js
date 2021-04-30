'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Restaurants', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      imageUrl: {
        allowNull: false,
        type: Sequelize.STRING
      },
      transactions: {
        type: Sequelize.TEXT
      },
      categories: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      rating: {
        defaultValue: 0.0,
        type: Sequelize.DECIMAL(10, 1)
      },
      price: {
        type: Sequelize.STRING
      },
      location: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      phoneNum: {
        allowNull: false,
        type: Sequelize.STRING
      },
      coordinates: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      photos: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Restaurants');
  }
};
