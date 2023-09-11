import taskModel from "../../../db/models/task.model.js";

export const addNewTask = async (req, res) => {
  try {
    let { userId, title, description, status, assignTo, deadLine } = req.body;
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
    res.status(500).json({ message: "eror sereve", error });
  }
};
