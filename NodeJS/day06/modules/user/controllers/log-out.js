import userModel from "../../../db/models/user.model.js";
export const logout = async (req, res) => {
  try {
    let { id } = req.params;
    let logoutUser = await userModel.findById(id);
    if (!logoutUser) {
      return res.status(401).json({ message: "User not found" });
    }
    localStorage.removeItem("userToken");
    return res.status(201).json({ message: "User deletd token ", logoutUser });
  } catch (error) {
    return res.status(500).json({ message: "Error form catch", error });
  }
};
