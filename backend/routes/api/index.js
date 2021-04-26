// backend/routes/api/index.js
const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const restaurantsRouter = require('./restaurants.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/restaurants', restaurantsRouter)

router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
  });

module.exports = router;
