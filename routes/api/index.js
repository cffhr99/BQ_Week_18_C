const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughRoutes = require('./thought-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/thoughts', thoughRoutes);
router.use('/users', userRoutes);

module.exports = router;