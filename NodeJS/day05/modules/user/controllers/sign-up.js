import userModel from "../../../db/models/user.model.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";
import { sendEmail } from "../../../utils/SendEmail.js";
export const signUpValidationSchema = Joi.object({
  userName: Joi.string().min(3).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(/^[A-Za-z0-9]{3,8}$/) // Updated pattern
    .required(),
  age: Joi.number().min(10).max(50),
  phone: Joi.string(),
  gender: Joi.string(),
  isVerified: Joi.bool(),
});

export const signUp = async (req, res) => {
  try {
    let { error } = signUpValidationSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      res.status(400).json({ message: "Error validation", error });
      console.log("error from signup validatetion schema", error);
    } else {
      let { email } = req.body;
      let foundedUser = await userModel.findOne({ email: email });
      let allusers = await userModel.find();
      foundedUser &&
        res.status(409).json({ message: "Already Register ", allusers });
      if (!foundedUser) {
        let hashedPassword = bcrypt.hashSync(req.body.password, 10);
        sendEmail(req.body.email);
        let addedUser = await userModel.insertMany({
          ...req.body,
          password: hashedPassword,
        });
        let allUsers = await userModel.find();
        return res
          .status(201)
          .json({ message: "added new user successfully", allUsers });
      }
    }
  } catch (error) {
    return res.json({ message: "error response" });
  }
};
