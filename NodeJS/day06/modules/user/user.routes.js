import { Router } from "express";
import { getAllUsers } from "./controllers/get-all-users.js";
import { signUp } from "./controllers/sign-up.js";
import { signIn } from "./controllers/sign-in.js";
import { changePassword } from "./controllers/change-password.js";
import { updateUser } from "./controllers/update-user.js";
import { deletedUser } from "./controllers/delete-user.js";
import { softDelete } from "./controllers/soft-delete.js";
import { logout } from "./controllers/log-out.js";
//  ==== imports Tasks
import { addNewTask } from "../task/controllers/add-task.js";
import { updateTask } from "../task/controllers/update-task.js";
import auth from "../../middleware/auth.js";
const userRouter = Router();

userRouter.post("/signup", signUp);
userRouter.post("/signin", signIn);
userRouter.get("/", auth, getAllUsers);
userRouter.put("/chenge-password/:id", auth, changePassword);
userRouter.patch("/update-user/:id", auth, updateUser);
userRouter.delete("/user/delete-user/:id", auth, deletedUser);
userRouter.patch("/user/soft-delete/:id", auth, softDelete);
userRouter.get("/user/logout", auth, logout);

// task
userRouter.post("/add-new-task", auth, addNewTask);
userRouter.put("/update-task/:id", auth, updateTask);
export default userRouter;
