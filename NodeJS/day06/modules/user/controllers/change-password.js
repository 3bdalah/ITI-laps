import userModel from "../../../db/models/user.model.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";

const schema = Joi.object({
  id: Joi.string().required(),
  newPassword: Joi.string().min(6).required(),
});

export const changePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { newPassword } = req.body;

    const { error } = schema.validate({ id, newPassword });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const user = await userModel.findById({ _id: id });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = bcrypt.hashSync(newPassword, 10);

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
