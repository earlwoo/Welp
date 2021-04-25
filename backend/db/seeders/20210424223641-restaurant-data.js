'use strict';
const fetch = require('node-fetch');

const API_KEY = "yp8e_ukuTNrRLpFjEH5C2gtF7BO5AHt_HXhh5a6sdE9RQmPbxVcvfdaLR2she3o284IXFUvvywEYfjj2ag8qlv--hJ4IjHkkuV38ln9L-yUUM9Y3mASK--Hj12GEYHYx"

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let bizArr = [];
    const res = await fetch('https://api.yelp.com/v3/businesses/search?term=restaurant&location=philadelphia&sort_by=rating', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        "Content-type": "application/json",
      },
    })

    if (!res.ok) throw res

    try {
      let businesses = await res.json()
      businesses = businesses.businesses

      bizArr = businesses.map(biz => {
        const { name, image_url, url, rating, categories, transactions, price, location, display_phone } = biz

        return { name, imageUrl: image_url, url, rating,
          categories: JSON.stringify(categories),
          transactions, price,
          location: JSON.stringify(location),
          phoneNum: display_phone
        }

      })

    } catch(err) {
    console.log(err)
    }

    // display_address: [...display_address]

    return queryInterface.bulkInsert('Restaurants', bizArr, {});
},

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Restaurants');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }

}
