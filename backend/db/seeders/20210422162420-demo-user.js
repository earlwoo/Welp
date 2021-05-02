'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

    const userArr = [{
        email: 'demo@user.io',
        username: 'Demo-lition',
        hashedPassword: bcrypt.hashSync('password'),
        firstName: 'Demo',
        lastName: 'User',
        avatar: faker.image.avatar(),
        city: faker.address.city(),
        state: faker.address.state(),
      }]
    for (let i = 0; i < 15; i++) {
      const userObj = {};
      userObj.email = faker.internet.email();
      userObj.username = faker.internet.userName();
      userObj.firstName = faker.name.firstName()
      userObj.lastName = faker.name.lastName()
      userObj.hashedPassword = bcrypt.hashSync(faker.internet.password())
      userObj.city = faker.address.city()
      userObj.state = faker.address.state()
      userObj.avatar = faker.image.avatar()

      userArr.push(userObj)
    }


    return queryInterface.bulkInsert('Users', userArr, {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['Demo-lition', 'FakeUser1', 'FakeUser2'] }
    }, {});
  }
};
