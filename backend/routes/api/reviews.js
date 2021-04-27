const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();
const { Review } = require('../../db/models')

router.get('/', asyncHandler(async (req, res) => {
    let results = await Review.findAll()
    res.json(results)
}))

router.post('/', asyncHandler(async (req, res) => {
    const { title, content, rating, userId, restId } = req.body

    try {
        await Review.create({
            title, content, rating, userId, restId
        })
    } catch(err) {
        console.log(err)
    }
}))

router.delete('/', asyncHandler(async(req, res) => {
    const { id } = req.body
    await Review.destroy({
        where: {
            id
        }
    })
}))


module.exports = router
