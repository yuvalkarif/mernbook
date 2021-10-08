import passport from "passport";
//Bcrypt
import bcrypt from "bcrypt";
const saltRounds = 10;

import User from "../models/user";

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

export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) next(err);
    if (!user) {
      res.send("No User Exists");
    } else {
      req.logIn(user, (err) => {
        if (err) {
          next(err);
        }
        res.send("Successfully Authenticated");
      });
    }
  })(req, res, next);
};

export const currentUser = (req, res, next) => {
  res.send(req?.user ?? "User not logged in");
};

export const getUser = async (req, res, next) => {
  const { id } = req.body;
  if (id) {
    let user;
    try {
      user = await User.findOne({ _id: id });
    } catch (err) {
      next(err);
    }
    user ? res.send(user) : res.send("User does not Exist");
  }
  res.send("No ID");
};

export const updateUser = async (req, res, next) => {
  const { id, picture, summary, work, education, birthday } = req.body;
  let user;
  if (id) {
    try {
      user = await User.findOne({ _id: id });
    } catch (err) {
      next(err);
    }
    user.picture = picture;
    user.about = { summary, work, education, birthday };
    try {
      await user.save();
    } catch (error) {
      next(error);
    }
    res.send("User Updated Successfully");
  } else res.send("No ID");
};
