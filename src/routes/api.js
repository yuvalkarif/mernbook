import { Router } from "express";
import * as userController from "../controllers/userController";
import * as postController from "../controllers/postController";

let router = Router();
//User
router.post("/signup", userController.signup); // (username,password,displayname)
router.post("/login", userController.login); // (username,password)
router.get("/current-user", userController.currentUser); // to be logged in ()
router.get("/user", userController.getUser); // (id)
router.patch("/user", userController.updateUser); // (id, picture?, summary?, work?, education?, birthday?)
router.patch("/follow", userController.followUser); // (id,userId)
router.patch("/unfollow", userController.unfollowUser); // (id,userId)
//Post
router.post("/post", postController.createPost);
router.patch("/post", postController.updatePost);
router.delete("/post", postController.removePost);
router.get("/post", postController.readPost);
router.get("/feed", postController.readPostsByFollowed);
router.put("/like", postController.likePost);
//Comments
router.post("/comment", postController.createComment);
router.delete("/comment", postController.removeComment);

export default router;

/*

    [x] API Route-Manage all CRUD Options
    [v]User
    [v]---Login
    [v]---Register
    [v]---Get User Profile
    [v]---Update
    [v]---Follow
    [v]---Unfollow
    [v]---Edit About
    [v]Posts
    [v]---Get All Posts By Followed
    [v]---Add new Post
    [v]---Edit your Posts
    [v]---Like/Unlike
    [v]Comment 
    [x]--Edit
    [x]--Like/Unlike

*/
