import userModel from "../../../db/models/user.model.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";

const schema = Joi.object({
  id: Joi.string().required(),
  age: Joi.number().integer().min(18).optional(),
  userName: Joi.string().min(3).optional(),
  gender: Joi.string().valid("Male", "Female", "Other").optional(),
});

export const updateUser = async (req, res) => {
  try {
    const { error } = schema.validate({ ...req.params, ...req.body });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let { id } = req.params;
    let { age, userName, gender } = req.body;

    let userFounded = await userModel.findById(id);
    if (!userFounded) {
      return res.status(404).json({ message: "User not found" });
    }

    let userToUpdated = await userModel.findByIdAndUpdate(id, {
      userName: userName,
      age: age,
      gender: gender,
    });

    let allListUsers = await userModel.find();
    return res.status(201).json({ message: "Updated users", allListUsers });
  } catch (error) {
    console.error("Error updating user:", error);
    return res.status(500).json({ message: "Error updating user", error });
  }
};
