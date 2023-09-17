import taskModel from "../../../db/models/task.model.js";
import Joi from "joi";

const schema = Joi.object({
  userId: Joi.string().required(),
  title: Joi.string().required(),
  description: Joi.string(),
  status: Joi.string(),
  assignTo: Joi.string(),
  deadLine: Joi.date(),
});

export const addNewTask = async (req, res) => {
  try {
    const { userId, title, description, status, assignTo, deadLine } = req.body;

    const { error } = schema.validate({
      userId,
      title,
      description,
      status,
      assignTo,
      deadLine,
    });

    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }

    const newTask = await taskModel.insertMany({
      title: title,
      description: description,
      status: status,
      userId: userId,
      assignTo: assignTo,
      deadline: deadLine,
    });
    let allTasks = await taskModel.find();
    res.status(201).json({
      message: "Added New Task",
      newTask,
      alltasks: "all tasks",
      allTasks,
    });
  } catch (error) {
    res.status(500).json({ message: "error server", error });
  }
};
