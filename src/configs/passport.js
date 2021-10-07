import bcrypt from "bcrypt";
import User from "../models/user";
import { Strategy as localStrategy } from "passport-local";

const passportSetup = (passport) => {
  passport.use(
    new localStrategy(async (username, password, done) => {
      let user;
      let result;
      try {
        user = await User.findOne({ username: username });
        if (!user) return done(null, false);
        result = await bcrypt.compare(password, user.password);
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        throw err;
      }
    })
  );
  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser(async (id, cb) => {
    User.findOne(
      { _id: id },
      (err,
      (user) => {
        cb(err, userInformaion);
      })
    );
  });
};

export default passportSetup;
