import userModel from "../../../db/models/user.model.js";
import Joi from "joi";

const logoutSchema = Joi.object({
  id: Joi.string().required(),
});

export const logout = async (req, res) => {
  try {
    const { error } = logoutSchema.validate(req.params);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let { id } = req.params;
    let logoutUser = await userModel.findById(id);
    if (!logoutUser) {
      return res.status(401).json({ message: "User not found" });
    }
    localStorage.removeItem("userToken");
    return res.status(201).json({ message: "User deleted token", logoutUser });
  } catch (error) {
    return res.status(500).json({ message: "Error from catch", error });
  }
};
