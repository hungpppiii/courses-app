const authController = require('../app/controllers/AuthController');
const passport = require('../config/auth/googleAuth');
const express = require('express');
const router = express.Router();

router.route('/login').get(authController.showLogin).post(authController.login);
router.get('/logout', authController.logout);

router
    .route('/register')
    .get(authController.showRegister)
    .post(authController.register);

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email'],
    }),
);

router.get(
    '/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login',
    }),
    (req, res) => {
        res.redirect('/');
    },
);

module.exports = router;
