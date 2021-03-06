// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const restaurantsRouter = require('./restaurants.js');
const reviewsRouter = require('./reviews.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/restaurants', restaurantsRouter)

router.use('/reviews', reviewsRouter)

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

module.exports = router;
