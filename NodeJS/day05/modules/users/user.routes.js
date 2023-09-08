import { Router } from "express";
import signUp from "./controller/singup.js";
import handleValidation from "../../middleware/handleValidation.js";
import signUpValidator from "./validation.js";
const userRouter = Router();

userRouter.post("/signup", signUpValidator, handleValidation, signUp);

export default userRouter;
