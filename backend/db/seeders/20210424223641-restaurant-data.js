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
      {
        name: 'Mood Cafe',
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/7VsnkvkmouJyfrCALGvlWw/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"cafes","title":"Cafes"},{"alias":"pakistani","title":"Pakistani"},{"alias":"halal","title":"Halal"}]',
        transactions: '{"0":"delivery"}',
        price: '$',
        location: '{"address1":"4618 Baltimore Ave","address2":"","address3":"","city":"Philadelphia","zip_code":"19143","country":"US","state":"PA","display_address":["4618 Baltimore Ave","Philadelphia, PA 19143"]}',
        phoneNum: '(215) 222-1037',
        coordinates: '{"latitude":39.948663912551,"longitude":-75.215831541495}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/7VsnkvkmouJyfrCALGvlWw/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/jvGilp3xYX4qcvYfs1-YJw/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/gTV8EsD_NkyfSYTJmUy3yA/o.jpg"]'
      },
      {
        name: 'Zahav',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/iuZHAsd1P9GJsWhjNaV6xQ/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"mideastern","title":"Middle Eastern"}]',
        transactions: '{"0":"delivery"}',
        price: '$$$',
        location: '{"address1":"237 St James Pl","address2":"","address3":"","city":"Philadelphia","zip_code":"19106","country":"US","state":"PA","display_address":["237 St James Pl","Philadelphia, PA 19106"]}',
        phoneNum: '(215) 625-8800',
        coordinates: '{"latitude":39.9462611465167,"longitude":-75.1451350778608}',
        photos: '["https://s3-media2.fl.yelpcdn.com/bphoto/iuZHAsd1P9GJsWhjNaV6xQ/o.jpg","https://s3-media4.fl.yelpcdn.com/bphoto/h0hzVxf0yR8kmbCEcvnfag/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/RTD40rN9jCdMpOEhi8g9mQ/o.jpg"]'
      },
      {
        name: 'Hikari Sushi',
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/ZEc1__tX3sQmAKETCWnoZA/o.jpg',
        rating: 5,
        categories: '[{"alias":"japanese","title":"Japanese"},{"alias":"sushi","title":"Sushi Bars"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: '$$',
        location: '{"address1":"1040 N American St","address2":"Ste 701","address3":null,"city":"Philadelphia","zip_code":"19123","country":"US","state":"PA","display_address":["1040 N American St","Ste 701","Philadelphia, PA 19123"]}',
        phoneNum: '(215) 923-2654',
        coordinates: '{"latitude":39.9669652,"longitude":-75.1410932}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/ZEc1__tX3sQmAKETCWnoZA/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/3BBdVCXZaUoS4pAL0lKCsA/o.jpg","https://s3-media4.fl.yelpcdn.com/bphoto/2zCoiNmYgIL5M4HN_TNAIQ/o.jpg"]'
      },
      {
        name: 'Ristorante Pesto',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/2scjsZVOBQxM7BHs8z2zEA/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"italian","title":"Italian"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: '$$',
        location: '{"address1":"1915 S Broad St","address2":"","address3":"","city":"Philadelphia","zip_code":"19148","country":"US","state":"PA","display_address":["1915 S Broad St","Philadelphia, PA 19148"]}',
        phoneNum: '(215) 336-8380',
        coordinates: '{"latitude":39.92634,"longitude":-75.16888}',
        photos: '["https://s3-media2.fl.yelpcdn.com/bphoto/2scjsZVOBQxM7BHs8z2zEA/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/Mp1ECOUVyqOvZKzquIvD4Q/o.jpg","https://s3-media4.fl.yelpcdn.com/bphoto/GJPEX8P0J_FC9_1mLtd85A/o.jpg"]'
      },
      {
        name: "Miss Rachel's Pantry",
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/Vs9zQua-Q2-4EGzxt-4OvQ/o.jpg',
        rating: 5,
        categories: '[{"alias":"catering","title":"Caterers"},{"alias":"vegan","title":"Vegan"}]',
        transactions: '{}',
        price: '$$',
        location: '{"address1":"1938 S Chadwick St","address2":"","address3":"","city":"Philadelphia","zip_code":"19145","country":"US","state":"PA","display_address":["1938 S Chadwick St","Philadelphia, PA 19145"]}',
        phoneNum: '(215) 798-0053',
        coordinates: '{"latitude":39.9265148,"longitude":-75.1737757}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/Vs9zQua-Q2-4EGzxt-4OvQ/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/AcIrU32D0cv02u_thc0lgQ/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/P5RsoxU-vywhlNVW73Pb5g/o.jpg"]'
      },
      {
        name: "Castellino's",
        imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/QNbOvotVpDMmkR4ufBfMlA/o.jpg',
        rating: 5,
        categories: '[{"alias":"italian","title":"Italian"},{"alias":"intlgrocery","title":"International Grocery"},{"alias":"delis","title":"Delis"}]',
        transactions: '{"0":"delivery"}',
        price: '$',
        location: '{"address1":"1255 E Palmer St","address2":null,"address3":"","city":"Philadelphia","zip_code":"19125","country":"US","state":"PA","display_address":["1255 E Palmer St","Philadelphia, PA 19125"]}',
        phoneNum: '(215) 416-1187',
        coordinates: '{"latitude":39.97235,"longitude":-75.12885}',
        photos: '["https://s3-media1.fl.yelpcdn.com/bphoto/QNbOvotVpDMmkR4ufBfMlA/o.jpg","https://s3-media4.fl.yelpcdn.com/bphoto/Fkh-Q-L6o-eh1R7H3bhgMQ/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/t2U-aC6NlYuU20T5pZXbkg/o.jpg"]'
      },
      {
        name: 'Circles + Squares',
        imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/ttmjblIPklcA16Weu7AjnA/o.jpg',
        rating: 5,
        categories: '[{"alias":"pizza","title":"Pizza"}]',
        transactions: '{}',
        price: '$$',
        location: '{"address1":"2513 Tulip St","address2":"","address3":null,"city":"Philadelphia","zip_code":"19125","country":"US","state":"PA","display_address":["2513 Tulip St","Philadelphia, PA 19125"]}',
        phoneNum: '(215) 309-3342',
        coordinates: '{"latitude":39.9811626536674,"longitude":-75.1232624799013}',
        photos: '["https://s3-media4.fl.yelpcdn.com/bphoto/ttmjblIPklcA16Weu7AjnA/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/yYVITmMVGSAV4JbD7maw8g/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/PfJWa4Rtaoh1ssaH4j5fnw/o.jpg"]'
      },
      {
        name: "Talia's Grille",
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/J2OQSxo-CEmsnp0qkTE5Dg/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"mediterranean","title":"Mediterranean"},{"alias":"bagels","title":"Bagels"},{"alias":"sandwiches","title":"Sandwiches"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: '$',
        location: '{"address1":"122 W Girard Ave","address2":"","address3":null,"city":"Philadelphia","zip_code":"19123","country":"US","state":"PA","display_address":["122 W Girard Ave","Philadelphia, PA 19123"]}',
        phoneNum: '(215) 413-9737',
        coordinates: '{"latitude":39.96882,"longitude":-75.13704}',
        photos: '["https://s3-media2.fl.yelpcdn.com/bphoto/J2OQSxo-CEmsnp0qkTE5Dg/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/Fhb8jvqB-3RIwHm6TqHhiw/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/LRe3tmzYN9_0OZD4FiEf_g/o.jpg"]'
      },
      {
        name: 'El Rancho Viejo',
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/R3e1ZEc8HWLh8S_gmQxppg/o.jpg',
        rating: 5,
        categories: '[{"alias":"mexican","title":"Mexican"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: undefined,
        location: '{"address1":"942 S 5th St","address2":"","address3":null,"city":"Philadelphia","zip_code":"19147","country":"US","state":"PA","display_address":["942 S 5th St","Philadelphia, PA 19147"]}',
        phoneNum: '(215) 644-8735',
        coordinates: '{"latitude":39.936282,"longitude":-75.152142}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/R3e1ZEc8HWLh8S_gmQxppg/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/HIxnbt_vPLtb4V63VPCZ1g/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/xUx2xBH2wS6dOYWt7mZlAg/o.jpg"]'
      },
      {
        name: 'South Philly Barbacoa',
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/-NUTRjvszG3iMxAIR3b_JA/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"mexican","title":"Mexican"},{"alias":"juicebars","title":"Juice Bars & Smoothies"}]',
        transactions: '{}',
        price: '$',
        location: '{"address1":"1140 S 9th St","address2":null,"address3":"","city":"Philadelphia","zip_code":"19147","country":"US","state":"PA","display_address":["1140 S 9th St","Philadelphia, PA 19147"]}',
        phoneNum: '(215) 694-3797',
        coordinates: '{"latitude":39.935354,"longitude":-75.158801}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/-NUTRjvszG3iMxAIR3b_JA/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/TI0W4tihDnWVSC5cC2UD1w/o.jpg","https://s3-media4.fl.yelpcdn.com/bphoto/QUbhA_Qnpb8iNkaAnfztRQ/o.jpg"]'
      },
      {
        name: "Mike's BBQ",
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/wmEFjt2a-lxGSSWRK5eyAA/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"bbq","title":"Barbeque"},{"alias":"sandwiches","title":"Sandwiches"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: '$$',
        location: '{"address1":"1703 S 11th St","address2":"","address3":null,"city":"Philadelphia","zip_code":"19148","country":"US","state":"PA","display_address":["1703 S 11th St","Philadelphia, PA 19148"]}',
        phoneNum: '(267) 831-2040',
        coordinates: '{"latitude":39.928409524335,"longitude":-75.1632106304169}',
        photos: '["https://s3-media2.fl.yelpcdn.com/bphoto/wmEFjt2a-lxGSSWRK5eyAA/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/b1b24GfflN96HFFws4FPbA/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/wyxvWuVbG-WRGs7qV-Jcxw/o.jpg"]'
      },
      {
        name: 'Chubby Cattle',
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/-0F9X-5WZBevd41EG0y1ew/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"chinese","title":"Chinese"},{"alias":"hotpot","title":"Hot Pot"},{"alias":"seafood","title":"Seafood"}]',
        transactions: '{"0":"delivery","1":"pickup"}',
        price: undefined,
        location: '{"address1":"146 N 10th St","address2":"","address3":null,"city":"Philadelphia","zip_code":"19107","country":"US","state":"PA","display_address":["146 N 10th St","Philadelphia, PA 19107"]}',
        phoneNum: '(866) 622-8853',
        coordinates: '{"latitude":39.95498,"longitude":-75.15622}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/-0F9X-5WZBevd41EG0y1ew/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/0t7dM4Szqo4-lezmPuIZGA/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/yiUzDIoT7V3ncVweIkEdHw/o.jpg"]'
      },
      {
        name: 'Alma Del Mar',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/eK9Wq6wxvlvdSVDXHtVvyg/o.jpg',
        rating: 5,
        categories: '[{"alias":"coffee","title":"Coffee & Tea"},{"alias":"sandwiches","title":"Sandwiches"},{"alias":"salad","title":"Salad"}]',
        transactions: '{}',
        price: undefined,
        location: '{"address1":"1007 S 9th St","address2":"","address3":null,"city":"Philadelphia","zip_code":"19147","country":"US","state":"PA","display_address":["1007 S 9th St","Philadelphia, PA 19147"]}',
        phoneNum: '(215) 644-8158',
        coordinates: '{"latitude":39.9373099377984,"longitude":-75.1580101624131}',
        photos: '["https://s3-media2.fl.yelpcdn.com/bphoto/eK9Wq6wxvlvdSVDXHtVvyg/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/nRmR0qimlxaWaYngadVGNA/o.jpg","https://s3-media4.fl.yelpcdn.com/bphoto/pGX0QuboLsb4YOeP551bDQ/o.jpg"]'
      },
      {
        name: 'Stockyard Sandwich',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/XdthDSUOXN8WbrXyEfl4OA/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"sandwiches","title":"Sandwiches"},{"alias":"breakfast_brunch","title":"Breakfast & Brunch"},{"alias":"catering","title":"Caterers"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: '$$',
        location: '{"address1":"1541 Spring Garden St","address2":"","address3":null,"city":"Philadelphia","zip_code":"19130","country":"US","state":"PA","display_address":["1541 Spring Garden St","Philadelphia, PA 19130"]}',
        phoneNum: '(215) 977-9273',
        coordinates: '{"latitude":39.9630709056427,"longitude":-75.1642701029778}',
        photos: '["https://s3-media2.fl.yelpcdn.com/bphoto/XdthDSUOXN8WbrXyEfl4OA/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/Ck5a9o34wjNwtptuGTpNDg/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/RzFd0BSzzeGcsrZYNKle0A/o.jpg"]'
      },
      {
        name: 'Cafe Mi Quang',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/54uGQQpzt3pjdL1xlgGtBA/o.jpg',
        rating: 5,
        categories: '[{"alias":"vietnamese","title":"Vietnamese"}]',
        transactions: '{}',
        price: '$',
        location: '{"address1":"3324 Kensington Ave","address2":"","address3":"","city":"Philadelphia","zip_code":"19134","country":"US","state":"PA","display_address":["3324 Kensington Ave","Philadelphia, PA 19134"]}',
        phoneNum: '(267) 239-0739',
        coordinates: '{"latitude":39.99843,"longitude":-75.11027}',
        photos: '["https://s3-media2.fl.yelpcdn.com/bphoto/54uGQQpzt3pjdL1xlgGtBA/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/Ec7pdip0qFS1uZhnVyxO3Q/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/_sSM1VKQBHj1YC7lBA5deg/o.jpg"]'
      },
      {
        name: 'Vineyards Cafe',
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/Qi6n6kO3NNZVv66mgPVj-w/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"creperies","title":"Creperies"},{"alias":"cafes","title":"Cafes"},{"alias":"breakfast_brunch","title":"Breakfast & Brunch"}]',
        transactions: '{"0":"delivery"}',
        price: '$',
        location: '{"address1":"847 N 16th St","address2":"","address3":"","city":"Philadelphia","zip_code":"19130","country":"US","state":"PA","display_address":["847 N 16th St","Philadelphia, PA 19130"]}',
        phoneNum: '(215) 232-3000',
        coordinates: '{"latitude":39.969939,"longitude":-75.163026}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/Qi6n6kO3NNZVv66mgPVj-w/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/nldHZvmDXJxHzsIzyR96TQ/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/OkPn7R88MjsSE5dw0IQVnw/o.jpg"]'
      },
      {
        name: 'Nimit Palace',
        imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/rI3UclUtJUMNlh5dMZKFlw/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"indpak","title":"Indian"},{"alias":"pakistani","title":"Pakistani"},{"alias":"seafood","title":"Seafood"}]',
        transactions: '{"0":"pickup"}',
        price: '$$',
        location: '{"address1":"114 White Horse Rd E","address2":"","address3":"","city":"Voorhees","zip_code":"08043","country":"US","state":"NJ","display_address":["114 White Horse Rd E","Voorhees, NJ 08043"]}',
        phoneNum: '(856) 258-2417',
        coordinates: '{"latitude":39.840816,"longitude":-74.9967433}',
        photos: '["https://s3-media1.fl.yelpcdn.com/bphoto/rI3UclUtJUMNlh5dMZKFlw/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/DjZHnhWQXQsHwHgoXTAGyA/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/ERU8MbbkzSn4nWsv4JC0lQ/o.jpg"]'
      },
      {
        name: 'Tomo Sushi & Ramen',
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/5rz6atklQ9KWThr0IBflYw/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"sushi","title":"Sushi Bars"},{"alias":"ramen","title":"Ramen"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: '$$',
        location: '{"address1":"228 Arch St","address2":"","address3":null,"city":"Philadelphia","zip_code":"19106","country":"US","state":"PA","display_address":["228 Arch St","Philadelphia, PA 19106"]}',
        phoneNum: '(267) 519-0209',
        coordinates: '{"latitude":39.951923,"longitude":-75.144335}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/5rz6atklQ9KWThr0IBflYw/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/ih0OrQAIe4FnV3IVMIWZJA/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/BNbJHPUH-4htZffFJI8GHA/o.jpg"]'
      },
      {
        name: 'Sky Cafe',
        imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/x0DgqKG6cb8AjJEdn29vLA/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"indonesian","title":"Indonesian"},{"alias":"noodles","title":"Noodles"}]',
        transactions: '{"0":"delivery"}',
        price: '$$',
        location: '{"address1":"1122-38 Washington Ave","address2":"Ste B","address3":"","city":"Philadelphia","zip_code":"19147","country":"US","state":"PA","display_address":["1122-38 Washington Ave","Ste B","Philadelphia, PA 19147"]}',
        phoneNum: '(215) 271-1983',
        coordinates: '{"latitude":39.93681,"longitude":-75.1626299}',
        photos: '["https://s3-media1.fl.yelpcdn.com/bphoto/x0DgqKG6cb8AjJEdn29vLA/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/SQqA5CdyuOpkATOk5o-axQ/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/gONlFoA1WY8XGrbpG-BeKw/o.jpg"]'
      },
      {
        name: 'Goldie',
        imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/g0c0TCMC24SgTiIZVD9Auw/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"falafel","title":"Falafel"},{"alias":"vegan","title":"Vegan"},{"alias":"mideastern","title":"Middle Eastern"}]',
        transactions: '{"0":"delivery"}',
        price: '$$',
        location: '{"address1":"1526 Sansom St","address2":"","address3":null,"city":"Philadelphia","zip_code":"19102","country":"US","state":"PA","display_address":["1526 Sansom St","Philadelphia, PA 19102"]}',
        phoneNum: '(267) 239-0777',
        coordinates: '{"latitude":39.9503,"longitude":-75.16685}',
        photos: '["https://s3-media1.fl.yelpcdn.com/bphoto/g0c0TCMC24SgTiIZVD9Auw/o.jpg","https://s3-media4.fl.yelpcdn.com/bphoto/Egln0T4QN-3otvLKr8xN_g/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/C5vpq3junTqCcB_W6YJQHw/o.jpg"]'
      },
      {
        name: 'Koto Sushi',
        imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/Yh3cOemeJ8kgznCc0Aahdw/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"japanese","title":"Japanese"},{"alias":"sushi","title":"Sushi Bars"}]',
        transactions: '{"0":"pickup","1":"delivery","2":"restaurant_reservation"}',
        price: '$$',
        location: '{"address1":"719 Sansom St","address2":"","address3":null,"city":"Philadelphia","zip_code":"19106","country":"US","state":"PA","display_address":["719 Sansom St","Philadelphia, PA 19106"]}',
        phoneNum: '(267) 239-2250',
        coordinates: '{"latitude":39.9487051044864,"longitude":-75.1531596924535}',
        photos: '["https://s3-media3.fl.yelpcdn.com/bphoto/Yh3cOemeJ8kgznCc0Aahdw/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/GD-lgWGxHgJgwUHDSppljg/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/ouJodudmh7q8sdccBErS6w/o.jpg"]'
      },
      {
        name: 'Vedge',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/zRDzsJebicuMt8_rKaJDqw/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"vegan","title":"Vegan"},{"alias":"vegetarian","title":"Vegetarian"}]',
        transactions: '{"0":"delivery"}',
        price: '$$$',
        location: '{"address1":"1221 Locust St","address2":"","address3":"","city":"Philadelphia","zip_code":"19107","country":"US","state":"PA","display_address":["1221 Locust St","Philadelphia, PA 19107"]}',
        phoneNum: '(215) 320-7500',
        coordinates: '{"latitude":39.9479310476302,"longitude":-75.1614279836694}',
        photos: '["https://s3-media2.fl.yelpcdn.com/bphoto/zRDzsJebicuMt8_rKaJDqw/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/BPPt5CqIelNa00HA_Cvb1Q/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/bgekt3pJDhNDktqpuMKDiQ/o.jpg"]'
      },
      {
        name: 'Sesami',
        imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/0XxMgjUyuqdGxwFngzrG0Q/o.jpg',
        rating: 5,
        categories: '[{"alias":"panasian","title":"Pan Asian"},{"alias":"asianfusion","title":"Asian Fusion"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: undefined,
        location: '{"address1":"1531 W Wynnewood Rd","address2":null,"address3":"","city":"Ardmore","zip_code":"19003","country":"US","state":"PA","display_address":["1531 W Wynnewood Rd","Ardmore, PA 19003"]}',
        phoneNum: '(484) 243-0321',
        coordinates: '{"latitude":39.9971902446,"longitude":-75.2928800136}',
        photos: '["https://s3-media4.fl.yelpcdn.com/bphoto/0XxMgjUyuqdGxwFngzrG0Q/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/gU53oALSyuortcHHK2nxcw/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/sRUQLGk23XOOnxlcQrNH4g/o.jpg"]'
      },
      {
        name: 'Vernick Food & Drink',
        imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/FrfO-piVgcGS8YmnPrvFag/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"newamerican","title":"American (New)"},{"alias":"beer_and_wine","title":"Beer, Wine & Spirits"}]',
        transactions: '{"0":"delivery"}',
        price: '$$$',
        location: '{"address1":"2031 Walnut St","address2":"","address3":"","city":"Philadelphia","zip_code":"19103","country":"US","state":"PA","display_address":["2031 Walnut St","Philadelphia, PA 19103"]}',
        phoneNum: '(267) 639-6644',
        coordinates: '{"latitude":39.950901,"longitude":-75.17485}',
        photos: '["https://s3-media2.fl.yelpcdn.com/bphoto/FrfO-piVgcGS8YmnPrvFag/o.jpg","https://s3-media2.fl.yelpcdn.com/bphoto/gSw02Pd-NiDevCUG01Mctg/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/j1GHbFUkV2bt72TzHWkMJw/o.jpg"]'
      },
      {
        name: "Chick's Deli",
        imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/NF7FLKKv3f5cnHpa5NGK7A/o.jpg',
        rating: 4.5,
        categories: '[{"alias":"delis","title":"Delis"},{"alias":"sandwiches","title":"Sandwiches"},{"alias":"cheesesteaks","title":"Cheesesteaks"}]',
        transactions: '{"0":"pickup","1":"delivery"}',
        price: '$',
        location: '{"address1":"906 Township Ln","address2":"","address3":"","city":"Cherry Hill","zip_code":"08002","country":"US","state":"NJ","display_address":["906 Township Ln","Cherry Hill, NJ 08002"]}',
        phoneNum: '(856) 429-2022',
        coordinates: '{"latitude":39.916501,"longitude":-75.021271}',
        photos: '["https://s3-media1.fl.yelpcdn.com/bphoto/NF7FLKKv3f5cnHpa5NGK7A/o.jpg","https://s3-media1.fl.yelpcdn.com/bphoto/jWQGmD5euwwMnzYmvHqtiQ/o.jpg","https://s3-media3.fl.yelpcdn.com/bphoto/0oLjFatYCePHiozLP4UL6Q/o.jpg"]'
      }
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
