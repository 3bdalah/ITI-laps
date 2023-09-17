import userModel from "../../../db/models/user.model.js";
import Joi from "joi";

const schema = Joi.object({
  id: Joi.string().required(),
});

export const softDelete = async (req, res) => {
  try {
    const { error } = schema.validate(req.params);

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let { id } = req.params;
    let updateUsertoDelete = await userModel.findByIdAndUpdate(id, {
      isDeleted: true,
    });

    if (!updateUsertoDelete) {
      return res.status(404).json({ message: "User not found" });
    }

    let allUsers = await userModel.find();
    return res.status(201).json({
      message: "User soft deleted and all users retrieved",
      allUsers,
    });
  } catch (error) {
    console.error("Error during soft delete:", error);
    return res.status(500).json({ message: "Error during soft delete", error });
  }
};
