import userModel from "../../../db/models/user.model.js";
export const getAllUsers = async (req, res) => {
  let allUsers = await userModel.find();
  res.json({ message: "get all users", allUsers });
};
