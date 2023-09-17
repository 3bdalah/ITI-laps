import userModel from "../../../db/models/user.model.js";
import Joi from "joi";

const schema = Joi.object({
  id: Joi.string().required(),
});

export const deletedUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = schema.validate({ id });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    let deletedUser = await userModel.findByIdAndRemove(id);
    if (!deletedUser) {
      res.status(400).json({ message: "User Not Found" });
    }
    let allUsers = await userModel.find();
    res.status(201).json({ message: "All User After Deleted user", allUsers });
  } catch (error) {
    res.status(500).json({ message: "User error to deleted", error });
  }
};
