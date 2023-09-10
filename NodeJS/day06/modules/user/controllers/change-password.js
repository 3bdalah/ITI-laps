import userModel from "../../../db/models/user.model.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";

export const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;

    // Find the user by ID
    const user = await userModel.findById({ _id: id });
    console.log("usercheng", user);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Debugging: Check the values of oldPassword and user.password
    // console.log("oldPassword:", password);
    console.log("user.password:", user.password);

    // Hash the new password
    const hashedPassword = bcrypt.hashSync(newPassword, 10);

    // Update the user's password in the database
    user.password = hashedPassword;
    const newUser = await userModel.findByIdAndUpdate(id, {
      password: hashedPassword,
    });
    const allUsers = await userModel.find();
    return res
      .status(200)
      .json({ message: "Password updated successfully", allUsers });
  } catch (error) {
    console.error("Error changing password:", error);
    return res.status(500).json({ message: "Error changing password" });
  }
};
