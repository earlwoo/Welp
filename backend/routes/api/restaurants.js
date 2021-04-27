const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Restaurant } = require('../../db/models')


router.get('/', asyncHandler(async (req, res) => {
    let results = await Restaurant.findAll()
    res.json(results)
}))



module.exports = router;
