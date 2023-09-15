import taskModel from "./../../../db/models/task.model.js";

export const deleteTask = async (req, res) => {
  try {
    let { id } = req.params;
    let { userId } = req.body;
    let checkFoundedTask = await taskModel.findById(id);

    if (!checkFoundedTask) {
      return res.status(404).json({ message: "Task Not Found" });
    }
    let newFoundedTask = await checkFoundedTask.populate("userId");
    if (userId !== newFoundedTask.userId._id.toString()) {
      return res.status(404).json({ message: "userID Creator Uncorrected" });
    }
    const afterDeleteTask = await taskModel.findByIdAndDelete(id);
    return res.status(200).json({ message: "done Delete", afterDeleteTask });
  } catch (error) {
    return res.status(500).json({ message: "Error server run" });
  }
};
