import User from "../models/user";
import Post from "../models/post";

export const createPost = async (req, res, next) => {
  const { id, body, picture } = req.body;
  if (id) {
    let user;
    let newPost;
    try {
      user = await User.findOne({ _id: id });
      newPost = new Post({
        creator: user,
        body: body,
      });
      await newPost.save();
      user.posts.push(newPost);
      await user.save();
    } catch (err) {
      next(err);
    }

    res.send({ newPost, user });
  } else {
    res.send("No User Detected");
  }
};

export const updatePost = async (req, res, next) => {
  const { id, postId, body, picture } = req.body;
  if (id && postId) {
    let user;
    let post;
    try {
      user = await User.findOne({ _id: id });
      post = await Post.findOne({ _id: postId }).populate("creator");
    } catch (err) {
      next(err);
    }

    if (user.id === post.creator.id && post && user) {
      post.body = body;
      post.picture = picture;
      try {
        await post.save();
      } catch (error) {
        next(error);
      }
      res.send("Post Updated Successfully");
    } else {
      res.send("You are not the creator of the post or it doesn't exists");
    }
  } else {
    res.send(id ? "No Post Detected" : "No User Detected");
  }
};

export const removePost = async (req, res, next) => {
  const { id, postId } = req.body;
  if (id && postId) {
    let user;
    let post;
    try {
      user = await User.findOne({ _id: id })?.populate("posts");
      post = await Post.findOne({ _id: postId })?.populate("creator");
    } catch (err) {
      next(err);
    }
    if (user && post) {
      user.posts = user.posts.filter((post) => post.id != postId);
      try {
        await user.save();
        await Post.findByIdAndDelete(postId);
      } catch (error) {
        next(error);
      }
      res.send("Post Deleted Successfully");
    } else {
      res.send(post ? "No User Found" : "No Post Found");
    }
  } else {
    res.send(id ? "No Post Detected" : "No User Detected");
  }
};

//CreateReadUpdateDelete
