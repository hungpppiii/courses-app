const express = require('express');
const sortMiddleware = require('../app/middlewares/sortMiddleware');
const router = express.Router();

const meController = require('../app/controllers/MeController');

router.get('/stored/courses', sortMiddleware, meController.storedCourses);
router.get('/deleted/courses', sortMiddleware, meController.deletedCourses);

module.exports = router;