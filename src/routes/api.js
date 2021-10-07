import { Router } from "express";
import * as userController from "../controllers/userController";

let router = Router();
router.post("/signup", userController.signup);

export default router;

// router.get("/",controller.func())

/*
    x API Route-Manage all CRUD Options
    x User
    x -Login
    x -Register
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
