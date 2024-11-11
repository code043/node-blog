import express from "express";
import PostController from "../controllers/PostController";

const postRouter = express.Router();
const Post = new PostController();

postRouter.get("/posts", Post.getAllUsers);
postRouter.get("/post/:id", Post.getUserById);
postRouter.post("/post", Post.createUser);

export { postRouter };
