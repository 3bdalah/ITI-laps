import userModel from "../../../db/models/user.model.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";

export const updateUser = async (req, res) => {
  let { id } = req.params;
  let { age, userName, gender } = req.body;
  try {
    let userFounded = await userModel.findById(id);
    if (!userFounded) {
      res.status(404).json({ message: "user not founded " });
    }
    let userToUpdated = await userModel.findByIdAndUpdate(id, {
      userName: userName,
      age: age,
      gender: gender,
    });
    let allListUsers = await userModel.find();
    res.status(201).json({ message: "updated users ", allListUsers });
  } catch (error) {
    res.status(500).json({ message: "error to update user", error });
  }
};
