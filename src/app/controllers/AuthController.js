const { asyncHandler } = require('../middlewares/asyncHandler');
const User = require('../models/User');

const showLogin = asyncHandler(async (req, res, next) => {
    if (req.user) {
        const referer = req.headers.referer;

        if (referer) {
            return res.redirect(referer);
        } else {
            return res.redirect('/');
        }
    }

    res.render('auth/login', {
        isLoginPage: true,
    });
});

const login = asyncHandler(async (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

const logout = asyncHandler(async (req, res, next) => {
    req.logout((error) => {
        if (error) {
            console.log(error);
        }
        req.session.destroy((err) => {
            if (err) {
                console.log(err);
                return res.redirect('/login');
            }
            res.clearCookie('connect.sid');
            res.redirect('/login');
        });
    });
});

const register = asyncHandler(async (req, res, next) => {});

const showRegister = asyncHandler(async (req, res, next) => {});

module.exports = {
    login,
    logout,
    register,
    showLogin,
    showRegister,
};
