const fetch = require('node-fetch');

let API_KEY = "yp8e_ukuTNrRLpFjEH5C2gtF7BO5AHt_HXhh5a6sdE9RQmPbxVcvfdaLR2she3o284IXFUvvywEYfjj2ag8qlv--hJ4IjHkkuV38ln9L-yUUM9Y3mASK--Hj12GEYHYx"

// REST

const fetchYelp = async () => {
    const res = await fetch('https://api.yelp.com/v3/businesses/search?term=restaurant&location=philadelphia&sort_by=rating', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${API_KEY}`,
            "Content-type": "application/json",
        },
    })

    if (!res.ok) throw res

    try {
        if (res.ok) {
            let businesses = await res.json()
            businesses = businesses.businesses

            const bizArr = businesses.map(biz => {
                const { id, name, image_url, url, categories, transactions, price, location, display_phone } = biz

                return { name, imageUrl: image_url, url,
                    categories: JSON.stringify(categories),
                    transactions, price,
                    location: JSON.stringify(location),
                    phoneNum: display_phone
                  }

            })
            console.log(bizArr)
            return bizArr
        }
    } catch (err) {
        console.log(err)
    }

}

fetchYelp()
