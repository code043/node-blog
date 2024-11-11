import express from "express";
import UserController from "../controllers/UserController";

const userRouter = express.Router();
const User = new UserController();

userRouter.get("/users", User.getAllUsers);
userRouter.get("/user/:id", User.getUserById);
userRouter.post("/user/register", User.createUser);

export { userRouter };
