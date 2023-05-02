const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const users = require('../user/model');
const { checkPassword } = require('../user/helpers/encrypt');

module.exports = (passport) => {
  passport.use(
    new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
        // NO BETTER OPTION TO CALL MODEL HERE?
        const user = await users.fetchUserBy("email", email);
        if (!user) {
          return done(null, false, { message: 'That email is not registered' });
        }

        // TO DO - PUT THIS IN UTILS OR SMTHN
        if(!await checkPassword(password, user.password)) {
          return done(null, false, { error: 'Password incorrect' });
        }
          return done(null, user);
      })
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    users.fetchUserBy("id", id)
    done(err, user);
  });
};