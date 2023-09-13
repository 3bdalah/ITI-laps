import mongoose from "mongoose"; // Import mongoose
import taskModel from "../../../db/models/task.model.js";

export const updateTask = async (req, res) => {
  try {
    let { id } = req.params;
    let foundedTask = await taskModel.findById(id);
    let newFoundedTask = await foundedTask.populate("userId");
    console.log("user object id ", newFoundedTask);
    if (!foundedTask) {
      res.status(200).json({ message: "Not found the task " });
    }
    let { userId, assignTo, status } = req.body;
    // console.log("user ID", userId);
    // const userIdObjectId = mongoose.Types.ObjectId(userId); // Fixed this line
    // console.log("founde task userid ", userIdObjectId);
    if (userId !== foundedTask.userId.$oid) {
      res.status(404).json({ message: "userID Creator Uncorrected" });
    }
    let afterUpdate = await taskModel.findByIdAndUpdate(id, {
      status: status,
    });
    let allTasks = await taskModel.find();
    res.status(201).json({
      message: "After Updated",
      afterUpdate,
      allTasks: "All task After Update",
      allTasks,
    });
  } catch (error) {
    res.json({ message: "error server update task ", error });
  }
};
