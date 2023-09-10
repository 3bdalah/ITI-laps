import userModel from "../../../db/models/user.model.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";

export const deletedUser = async (req, res) => {
  try {
    let { id } = req.params;
    let deletedUser = await userModel.findByIdAndRemove(id);
    if (!deletedUser) {
      res.status(400).json({ message: "User Not Found" });
    }
    let allUsers = await userModel.find();
    res.status(201).json({ message: "All User After Deleted user", allUsers });
  } catch (error) {
    res.status(500).json({ message: "User error to deleted", error });
  }
};
