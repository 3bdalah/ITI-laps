import { Router } from "express";
//  ==== imports Tasks
import { addNewTask } from "../task/controllers/add-task.js";
import { updateTask } from "../task/controllers/update-task.js";
import auth from "../../middleware/auth.js";
const taskRouter = Router();
// task
taskRouter.post("/add-new-task", auth, addNewTask);
taskRouter.patch("/update-task/:id", auth, updateTask);

export default taskRouter;
