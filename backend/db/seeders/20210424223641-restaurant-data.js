'use strict';


module.exports = {
  up: (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('Restaurants', [
      {
        name: "Christie's Deli",
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/h7eEiQigXwXVq6MYdhG8vg/o.jpg',
        rating: 5,
        categories: '[{"alias":"delis","title":"Delis"},{"alias":"breakfast_brunch","title":"Breakfast & Brunch"},{"alias":"sandwiches","title":"Sandwiches"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: '$',
        location: '{"address1":"1822 Spring Garden St","address2":"Unit B","address3":"","city":"Philadelphia","zip_code":"19130","country":"US","state":"PA","display_address":["1822 Spring Garden St","Unit B","Philadelphia, PA 19130"]}',
        phoneNum: '(215) 563-0555',
        coordinates: '{"latitude":39.9630809276773,"longitude":-75.1693602651358}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/h7eEiQigXwXVq6MYdhG8vg/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/9ytav-XqkfpHeTX1iStaVw/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/mlthCB0k8d2FPuj9EmyeSg/o.jpg"]'
      },
      {
        name: 'Reading Terminal Market',
        imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/Q2gU9ltGWVDgvHjDIUlCIg/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"food_court","title":"Food Court"},{"alias":"publicmarkets","title":"Public Markets"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: '$$',
        location: '{"address1":"51 N 12th St","address2":"","address3":"","city":"Philadelphia","zip_code":"19107","country":"US","state":"PA","display_address":["51 N 12th St","Philadelphia, PA 19107"]}',
        phoneNum: '(215) 922-2317',
        coordinates: '{"latitude":39.953341464505,"longitude":-75.1588545174235}',
        photos: '["https://s3-media4.fl.yelpcdn.com/bphoto/Q2gU9ltGWVDgvHjDIUlCIg/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/GkOcZAVi2xuzRTZGGBqY7A/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/iTBahOTog8kGU8LJ9mfnOg/o.jpg"]'
      },
      {
        name: 'Tortilleria San Roman',
        imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/BZWucEoWxyib7koCt-10nQ/o.jpg',
        rating: 5,
        categories: '[{"alias":"mexican","title":"Mexican"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: '$',
        location: '{"address1":"951 S 9th St","address2":null,"address3":"","city":"Philadelphia","zip_code":"19147","country":"US","state":"PA","display_address":["951 S 9th St","Philadelphia, PA 19147"]}',
        phoneNum: '(267) 507-9161',
        coordinates: '{"latitude":39.937636,"longitude":-75.1580824734097}',
        photos: '["https://s3-media1.fl.yelpcdn.com/bphoto/BZWucEoWxyib7koCt-10nQ/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/x8_VJ2eti8jfMaxgGh6OzA/o.jpg","https://s3-media4.fl.yelpcdn.com/bphoto/3N2Q6X2qQZGyfuJIQAmG4w/o.jpg"]'
      },
      {
        name: 'Cafe La Maude',
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/NM1xtYuER6MLwPCtvAj3bA/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"cafes","title":"Cafes"},{"alias":"breakfast_brunch","title":"Breakfast & Brunch"},{"alias":"mediterranean","title":"Mediterranean"}]',
        transactions: '{"0":"delivery"}',
        price: '$$',
        location: '{"address1":"816 N 4th St","address2":"","address3":"","city":"Philadelphia","zip_code":"19123","country":"US","state":"PA","display_address":["816 N 4th St","Philadelphia, PA 19123"]}',
        phoneNum: '(267) 318-7869',
        coordinates: '{"latitude":39.963948,"longitude":-75.144364}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/NM1xtYuER6MLwPCtvAj3bA/o.jpg","https://s3-media4.fl.yelpcdn.com/bphoto/bHPROh6wivPTpDHBgG7ZoA/o.jpg","https://s3-media4.fl.yelpcdn.com/bphoto/_vKBkh0Mnb4lOFYvg__WtQ/o.jpg"]'
      },
      {
        name: 'Middle Child',
        imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/K5r-Ej8kYsQcRQuPV5ZbFA/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"breakfast_brunch","title":"Breakfast & Brunch"},{"alias":"sandwiches","title":"Sandwiches"},{"alias":"coffee","title":"Coffee & Tea"}]',
        transactions: '{"0":"delivery"}',
        price: '$',
        location: '{"address1":"248 S 11th St","address2":null,"address3":"","city":"Philadelphia","zip_code":"19107","country":"US","state":"PA","display_address":["248 S 11th St","Philadelphia, PA 19107"]}',
        phoneNum: '(267) 930-8344',
        coordinates: '{"latitude":39.94717,"longitude":-75.15947}',
        photos: '["https://s3-media4.fl.yelpcdn.com/bphoto/K5r-Ej8kYsQcRQuPV5ZbFA/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/7JNUFSAhdtPeYft8WPnwaw/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/-6H7AiJt7bLrdD8EG7q7Nw/o.jpg"]'
      },
      
    ], {});
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
