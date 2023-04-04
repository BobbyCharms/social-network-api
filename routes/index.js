const router = require('express').Router();
const thoughtRoutes = require('./api/thoughtRoutes');

router.use('/thoughts', thoughtRoutes);

module.exports = router;