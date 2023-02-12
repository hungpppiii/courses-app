const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.shows);
// '/' phải ở dưới để tránh math
router.use('/', newsController.index);

module.exports = router;
