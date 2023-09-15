import taskModel from "./../../../db/models/task.model.js";

export const getAllTasks = async (req, res) => {
  try {
    const allTasks = await taskModel.find().populate("userId");

    if (!allTasks || allTasks.length === 0) {
      return res.status(404).json({ message: "No tasks found" });
    }

    return res
      .status(200)
      .json({ message: "All tasks with user data", tasks: allTasks });
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
