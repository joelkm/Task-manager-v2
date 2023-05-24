const LocalStrategy = require('passport-local').Strategy;

const User = require('../user/model');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        const user = await User.findOne({email});
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        if(!await user.matchesPassword(password, user.password)) {
          return done(null, false, { error: 'Password incorrect' });
        }
          return done(null, user);
      })
  );

  passport.serializeUser((user, done) => {
    return done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    const user = await User.findById(id);
    return done(null, user);
  });
};