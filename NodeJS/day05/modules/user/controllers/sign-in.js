import userModel from "../../../db/models/user.model.js";
import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "jsonwebtoken";
export const signInValidationSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: ["com", "net"] } }) // Specify the allowed TLDs
    .required(),
  password: Joi.string()
    .pattern(/^[A-Za-z0-9]{3,8}$/)
    .required(),
});

export const signIn = async (req, res) => {
  let { error } = signInValidationSchema.validate(req.body);
  if (error) {
    res.status(400).json({ message: "error", error });
  } else {
    let foundedUser = await userModel.findOne({ email: req.body.email });
    if (foundedUser) {
      console.log(foundedUser);
      let matchedPass = bcrypt.compareSync(
        req.body.password,
        foundedUser.password
      );
      if (matchedPass) {
        let token = jwt.sign({ id: foundedUser.id }, "userToken");
        res.status(200).json({ message: "Welocome fucken user", token });
      } else {
        res.status(400).json({ message: "Wrong password" });
      }
    } else {
      res.satuts(400).json({ message: "user not found" });
    }
  }
};
