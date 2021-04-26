const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Restaurant } = require('../../db/models')


router.get('/', asyncHandler(async (req, res) => {
    let results = await Restaurant.findAll()


    // console.log(restaurants)
    // restaurants.forEach(restaurant => {
    //     restObj[restaurant.id] = JSON.parse(restaurant)}
    // )

    res.json(results)
}))



module.exports = router;
