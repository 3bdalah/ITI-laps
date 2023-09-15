import mongoose from "mongoose"; // Import mongoose
import taskModel from "../../../db/models/task.model.js";
import userModel from "./../../../db/models/user.model.js";
export const updateTask = async (req, res) => {
  try {
    let { id } = req.params;
    let foundedTask = await taskModel.findById(id);
    if (!foundedTask) {
      return res.status(404).json({ message: "Not found the task " });
    }
    let newFoundedTask = await foundedTask.populate("userId");
    // console.log("userid New Founded Task ", newFoundedTask);
    let { userId, assignTo, status } = req.body;
    console.log(
      "userId creator task to string ",
      newFoundedTask.userId._id.toString()
    );
    if (userId !== newFoundedTask.userId._id.toString()) {
      return res.status(404).json({ message: "userID Creator Uncorrected" });
    }
    let afterUpdate = await taskModel.findByIdAndUpdate(id, {
      status: status,
    });
    let allTasks = await taskModel.find();
    return res.status(201).json({
      message: "After Updated",
      afterUpdate,
      allTasks: "All task After Update",
      allTasks,
    });
  } catch (error) {
    return res.json({ message: "error server update task ", error });
  }
};
