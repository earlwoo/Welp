'use strict';
const fetch = require('node-fetch');
const { apiKey } = require('../../config').yelpAPI

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const res = await fetch('https://api.yelp.com/v3/businesses/search?term=restaurant&location=philadelphia&sort_by=rating&limit=30', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-type": "application/json",
      },
    })

    if (!res.ok) throw res
    let bizArr = [];
    try {
      let businesses = await res.json()
      businesses = businesses.businesses
      bizArr = businesses.map((biz) => {
        const {
          id,
          name,
          image_url,
          rating,
          categories,
          transactions,
          price,
          location,
          display_phone,
          coordinates
        } = biz

        return {id, name, imageUrl: image_url, rating,
          categories: JSON.stringify(categories),
          transactions: JSON.stringify({...transactions}),
          price, rating,
          location: JSON.stringify(location),
          phoneNum: display_phone,
          coordinates: JSON.stringify(coordinates),
        }

      })

    } catch(err) {
    console.log(err)
    }

    for (let i = 0; i < bizArr.length; i++) {
      let business = bizArr[i];
      let res = await fetch(`https://api.yelp.com/v3/businesses/${business.id}`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-type": "application/json",
          },
        })

        let { photos } = await res.json()
        bizArr[i].photos = JSON.stringify(photos)
        delete bizArr[i].id

        setTimeout(()=>{}, 2000)
    }
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
