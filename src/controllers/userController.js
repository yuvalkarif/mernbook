import passport from "passport";
//Bcrypt
import bcrypt from "bcrypt";
const saltRounds = 10;

import User from "../models/user";
// export const login = (req, res, next) => {
//   passport.authenticate("local");
// };

export const signup = async (req, res, next) => {
  let user;
  let savedUser;
  try {
    user = await User.findOne({ username: req.body.username });
    if (!user) {
      const { username, displayname, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      const newUser = new User({
        username,
        displayname,
        password: hashedPassword,
      });

      savedUser = await newUser.save();
      res.send("User Registered Successfully");
    } else {
      res.send("User Already Exists");
    }
  } catch (error) {
    next(error);
  }
};
