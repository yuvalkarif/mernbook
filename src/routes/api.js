import { Router } from "express";
import * as userController from "../controllers/userController";
import * as postController from "../controllers/postController";

let router = Router();
//User
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/currentUser", userController.currentUser);
router.get("/user", userController.getUser);
router.patch("/user", userController.updateUser);

router.post("/post", postController.createPost);
router.patch("/post", postController.updatePost);
router.delete("/post", postController.removePost);
router.get("/post", postController.readPost);

export default router;

// router.get("/",controller.func())

/*
    x API Route-Manage all CRUD Options
    x User
    v -Login
    v -Register
    x -Get User Profile
    x -Update
     x -Follow
     x -Unfollow
     x -Edit About
    x Posts
    x -Get All Posts By Followed
    x -Add new Post
    x -Edit your Posts
    x -Like/Unlike
    x -Comment 
     x -Edit
     x -Like/Unlike
*/
