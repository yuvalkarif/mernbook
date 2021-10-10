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
      res.status(405).send("User Already Exists");
    }
  } catch (error) {
    next(error);
  }
};

export const login = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) next(err);
    if (!user) {
      res.status(403).send("No User Exists");
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
  user ? res.send(req?.user) : res.status(401).send("User not logged in");
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
    user ? res.send(user) : res.status(404).send("User does not Exist");
  }
  res.status(404).send("No ID");
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
  } else res.status(404).send("No ID");
};

export const followUser = async (req, res, next) => {
  const { id, userId } = req.body;

  if (id && userId) {
    let user;
    let userToFollow;
    try {
      user = await User.findOne({ _id: id });
      userToFollow = await User.findOne({ _id: userId });
    } catch (error) {
      next(error);
    }
    if (user && userToFollow) {
      userToFollow.followers.push(user);
      user.following.push(userToFollow);
      try {
        await user.save();
        await userToFollow.save();
      } catch (error) {
        next(error);
      }
      res.send("Followed User");
    } else {
      res.status(404).send("Users not Found");
    }
  } else {
    res
      .status(404)
      .send(id ? "No Valid ID Detected" : "No Valid UserID Detected");
  }
};

export const unfollowUser = async (req, res, next) => {
  const { id, userId } = req.body;

  if (id && userId) {
    let user;
    let userToFollow;
    try {
      user = await User.findOne({ _id: id });
      userToFollow = await User.findOne({ _id: userId });
    } catch (error) {
      next(error);
    }
    if (user && userToFollow) {
      userToFollow.followers.filter((follower) => follower.id !== id);
      user.following.filter((follower) => follower.id !== userId);
      try {
        await user.save();
        await userToFollow.save();
      } catch (error) {
        next(error);
      }
      res.send("Unfollowed User");
    } else {
      res.status(404).send("Users not Found");
    }
  } else {
    res
      .status(404)
      .send(id ? "No Valid ID Detected" : "No Valid UserID Detected");
  }
};
