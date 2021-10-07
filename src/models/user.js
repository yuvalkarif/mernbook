import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  displayname: { type: String, required: true },
  password: { type: String, required: true },
  following: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  followers: [{ type: mongoose.Types.ObjectId, ref: "User" }],
  posts: [{ type: mongoose.Types.ObjectId, ref: "Post" }],
  picture: { type: String },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  about: {
    summary: { type: String },
    work: { type: String },
    education: { type: String },
    birthday: { type: Date },
  },
});

const User = model("User", userSchema);
export default User;
