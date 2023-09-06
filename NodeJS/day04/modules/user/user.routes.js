import express from "express";
import { getallusers, signUp, signIn } from "./user.controller.js";

const userRouter = express.Router();

userRouter.get("/user", getallusers);
userRouter.post("/user/signup", signUp);
userRouter.post("/user/login", signIn);

export default userRouter;
