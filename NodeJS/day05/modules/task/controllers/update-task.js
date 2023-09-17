import mongoose from "mongoose";
import taskModel from "../../../db/models/task.model.js";
import userModel from "./../../../db/models/user.model.js";
import Joi from "joi";

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;

    const schema = Joi.object({
      userId: Joi.string().required(),
      assignTo: Joi.string(),
      status: Joi.string(),
    });

    const { userId, assignTo, status } = req.body;
    const validation = schema.validate({ userId, assignTo, status });

    if (validation.error) {
      return res
        .status(400)
        .json({ message: validation.error.details[0].message });
    }

    const foundedTask = await taskModel.findById(id);

    if (!foundedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    const newFoundedTask = await foundedTask.populate("userId");
    const userIdString = newFoundedTask.userId._id.toString();

    if (userId !== userIdString) {
      return res.status(401).json({ message: "User ID Creator Uncorrected" });
    }

    const afterUpdate = await taskModel.findByIdAndUpdate(id, {
      status: status,
    });

    const allTasks = await taskModel.find();

    return res.status(201).json({
      message: "Task Updated Successfully",
      afterUpdate,
      allTasks: "All tasks after update",
      allTasks,
    });
  } catch (error) {
    console.error("Error updating task:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
