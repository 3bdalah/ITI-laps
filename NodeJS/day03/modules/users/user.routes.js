import express from "express";
import {
  addUser,
  getallUsers,
  updateUsers,
  deleteUserById,
  signIn,
  signUp,
  getAllUsersBtwRange,
} from "./user.controller.js";
const userRoutes = express.Router();

userRoutes.post("/signin", signIn);
userRoutes.post("/signup", signUp);
userRoutes.get("/users", getallUsers);

userRoutes.post("/adduser", addUser);
// userRoutes.get("/updateu", updateUsers);
userRoutes.patch("/:id", updateUsers);
userRoutes.post("/getalluserbetween", getAllUsersBtwRange);
userRoutes.delete("/:id", deleteUserById);
export default userRoutes;
