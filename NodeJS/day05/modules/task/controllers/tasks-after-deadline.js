import taskModel from "./../../../db/models/task.model.js";
import moment from "moment";
import Joi from "joi";

export const getAllTasksAfterDeadline = async (req, res) => {
  try {
    const schema = Joi.object({
      userId: Joi.string().required(),
    });

    const { userId } = req.body;
    const validation = schema.validate({ userId });

    if (validation.error) {
      return res
        .status(400)
        .json({ message: validation.error.details[0].message });
    }

    const currentDate = moment();
    const tasksNotDoneAfterDeadline = await taskModel
      .find({
        status: "toDo",
        deadline: { $lt: currentDate },
        userId,
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
    console.error("Error fetching overdue tasks:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};
