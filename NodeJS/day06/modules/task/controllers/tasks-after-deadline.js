import taskModel from "./../../../db/models/task.model.js";
import moment from "moment";
export const getAllTasksAfterDeadline = async (req, res) => {
  try {
    const currentDate = moment();
    const tasksNotDoneAfterDeadline = await taskModel
      .find({
        status: "toDo",
        deadline: { $lt: currentDate },
      })
      .populate("userId");
    if (!tasksNotDoneAfterDeadline || tasksNotDoneAfterDeadline.length === 0) {
      return res.status(404).json({ message: "No overdue tasks found" });
    }

    return res.status(200).json({
      message: "Overdue tasks that are not done",
      tasks: tasksNotDoneAfterDeadline,
    });
  } catch (error) {
    console.error("Error fetching overduse tasks:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
