const authController = require('../app/controllers/AuthController');
const express = require('express');
const router = express.Router();

router.route('/login').get(authController.showLogin).post(authController.login);
router
    .route('/register')
    .get(authController.showRegister)
    .post(authController.register);

module.exports = router;
