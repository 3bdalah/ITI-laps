import mongoose from "mongoose"; // Import mongoose
import taskModel from "../../../db/models/task.model.js";

export const updateTask = async (req, res) => {
  let { id } = req.params;
  let foundedTask = await taskModel.findById(id);
  let { userId, assignTo, status } = req.body;
  try {
    // Convert userId to ObjectId
    const userIdObjectId = await mongoose.Types.ObjectId(userId);
    console.log("user object id ", userIdObjectId);
    if (!foundedTask) {
      res.status(401).json({ message: "Task Not Found" });
    }

    if (userIdObjectId.toString() !== foundedTask.userId.toString()) {
      res.status(401).json({ message: "userID Creator Uncorrected" });
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
    res.status(500).json({ message: "error server update task ", error });
  }
};
