const passport = require('passport');
const User = require('../../app/models/User');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, users) => {
            done(err, users);
        });
    });
};
