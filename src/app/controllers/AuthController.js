const { asyncHandler } = require('../middlewares/asyncHandler');
const User = require('../models/User');

const showLogin = asyncHandler(async (req, res, next) => {});

const showRegister = asyncHandler(async (req, res, next) => {});

const login = asyncHandler(async (req, res, next) => {});

const register = asyncHandler(async (req, res, next) => {});

module.exports = {
    login,
    register,
    showLogin,
    showRegister,
};
