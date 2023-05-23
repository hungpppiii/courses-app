const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require('../');
const User = require('../../app/models/User');
const init = require('./init');

passport.use(
    new GoogleStrategy(
        {
            clientID: config.googleClientId,
            clientSecret: config.googleClientSecret,
            callbackURL: `${config.serverUrl}/auth/google/callback`,
        },
        async (accessToken, refreshToken, profile, cb) => {
            try {
                const user = await User.findOrCreate({
                    googleId: profile.id,
                    username: profile.displayName,
                });
                cb(null, user);
            } catch (error) {
                cb(error);
            }
        },
    ),
);

init();

module.exports = passport;
