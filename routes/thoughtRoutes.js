const router = require('express').Router();

const {
    getThoughts, 
} = require('../controllers/thoughtsController.js');

router.route('/').get(getThoughts).post(createThought);

module.exports = router;