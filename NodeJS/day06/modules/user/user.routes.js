import { Router } from "express";
import { getAllUsers } from "./controllers/get-all-users.js";
import { signUp } from "./controllers/sign-up.js";
import { signIn } from "./controllers/sign-in.js";
import { changePassword } from "./controllers/change-password.js";
import { updateUser } from "./controllers/update-user.js";
import { deletedUser } from "./controllers/delete-user.js";
import { softDelete } from "./controllers/soft-delete.js";
import { logout } from "./controllers/log-out.js";
import auth from "../../middleware/auth.js";
const userRouter = Router();

userRouter.get("/", auth, getAllUsers);
userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);
userRouter.put("/chenge-password/:id", auth, changePassword);
userRouter.patch("/update-user/:id", auth, updateUser);
userRouter.delete("/user/delete-user/:id", auth, deletedUser);
userRouter.patch("/user/soft-delete/:id", auth, softDelete);
userRouter.get("/user/logout", auth, logout);

export default userRouter;
