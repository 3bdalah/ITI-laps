import userModel from "../../../db/models/user.model.js";
export const softDelete = async (req, res) => {
  try {
    let { id } = req.params;
    let updateUsertoDelete = await userModel.findByIdAndUpdate(id, {
      isDeleted: true,
    });
    let allUsers = await userModel.find();
    res.status(201).json({
      message: "done Completed Delette and display all users",
      allUsers,
    });
  } catch (error) {
    console.log("deleted accoutn by soft ", error);
    res.status(401).json({ message: "error soft delete ", error });
  }
};
