const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.shows);
// '/' phải ở dưới để tránh math
router.get('/', newsController.index);

module.exports = router;
