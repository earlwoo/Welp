const fetch = require('node-fetch');

let API_KEY = "yp8e_ukuTNrRLpFjEH5C2gtF7BO5AHt_HXhh5a6sdE9RQmPbxVcvfdaLR2she3o284IXFUvvywEYfjj2ag8qlv--hJ4IjHkkuV38ln9L-yUUM9Y3mASK--Hj12GEYHYx"

// REST

// const fetchYelp = async () => {
//     const res = await fetch('https://api.yelp.com/v3/businesses/search?term=restaurant&location=philadelphia&sort_by=rating', {
//         method: 'GET',
//         headers: {
//             Authorization: `Bearer ${API_KEY}`,
//             "Content-type": "application/json",
//         },
//     })

//     if (!res.ok) throw res

//     try {
//         if (res.ok) {
//             let businesses = await res.json()
//             businesses = businesses.businesses

//             const bizArr = businesses.map(biz => {
//                 const { name, image_url, url, rating, categories, transactions, price, location, display_phone } = biz

//                 return { name, imageUrl: image_url, url, rating,
//                     categories: JSON.stringify(categories),
//                     transactions, price, rating,
//                     location: JSON.stringify(location),
//                     phoneNum: display_phone
//                   }

//             })
//             console.log(bizArr)
//             return bizArr
//         }
//     } catch (err) {
//         console.log(err)
//     }

// }

// fetchYelp()








const randomRating = Math.floor(Math.random() * (6 - 1) + 1)
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


    for(let i = 0; i < 50; i++) {
        reviewArr.push({
          title: titlesArr[getRandom(0, 4)],
          userId: getRandom(1, 4),
          restId: getRandom(1, 21),
          content: contentArr[getRandom(0, 6)],
          rating: getRandom(2, 6),
        })
    }

    console.log(reviewArr[5])
