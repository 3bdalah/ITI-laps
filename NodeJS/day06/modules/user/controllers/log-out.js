import userModel from "../../../db/models/user.model.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";
export const logout = async (req, res) => {
  try {
    let { id } = req.params;
    let logoutUser = await userModel.findById(id);
    if (!logoutUser) {
      res.status(401).json({ message: "User not found" });
    }
    localStorage.removeItem("userToken"); // Assuming 'token' is the key you used to store the token
    res.status(201).json({ message: "User deletd token ", logoutUser });
  } catch (error) {
    res.status(500).json({ message: "Error form catch", error });
  }
};
