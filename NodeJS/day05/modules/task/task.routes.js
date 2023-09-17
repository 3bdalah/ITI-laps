import { Router } from "express";
//  ==== imports Tasks
import { addNewTask } from "../task/controllers/add-task.js";
import { updateTask } from "../task/controllers/update-task.js";
import auth from "../../middleware/auth.js";
import { deleteTask } from "./controllers/delete-task.js";
import { getAllTasks } from "./controllers/get-all-tasks.js";
import { getAllTasksAfterDeadline } from "./controllers/tasks-after-deadline.js";
const taskRouter = Router();
// task
taskRouter.post("/add-new-task", auth, addNewTask);
taskRouter.patch("/update-task/:id", auth, updateTask);
taskRouter.delete("/delete-task/:id", auth, deleteTask);
taskRouter.get("/get-all-tasks", auth, getAllTasks);
taskRouter.get("/get-all-tasks-after-deadline", auth, getAllTasksAfterDeadline);
export default taskRouter;
