const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const router = express.Router();
const { Review } = require('../../db/models')

const validateReview = [
    check('title')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Please provide a title.'),
    check('content')
        .exists({ checkFalsy: true })
        .notEmpty()
        .withMessage('Review cannot be empty.'),
    handleValidationErrors
]

router.get('/', asyncHandler(async (req, res) => {
    let results = await Review.findAll()
    res.json(results)
}))

router.post('/', validateReview, asyncHandler(async (req, res) => {
    const { title, content, rating, userId, restId } = req.body

    try {
        const addedReview = await Review.create({
            title, content, rating, userId, restId
        })
        res.json(addedReview)
    } catch(err) {
        console.log(err)
    }
}))

router.post('/:id',  validateReview,asyncHandler(async (req, res) => {
    const { id, title, content, rating } = req.body
    await Review.update({title, content, rating,},{where: {
        id
    }})

    try {
        const updatedReview = await Review.findByPk(id)
        res.json(updatedReview)
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
    res.json({id})
}))


module.exports = router
