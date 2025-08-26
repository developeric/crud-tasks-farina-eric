import { Router } from "express";
import { taskCreate, getTask, getTaskbyPK, taskUpdate, taskDelete } from "../controllers/task.controllers.js";
import { controller } from "../middlewares/validator.js";
import { createTaskValidator, deleteTaskValidator, findByPKTaskValidator, updateTaskValidator } from "../middlewares/validations/task.validations.js";


export const routerTask = Router();

routerTask.post("/tasks",createTaskValidator,controller,taskCreate)

routerTask.get("/tasks",controller,getTask)

routerTask.get("/tasks/:id",findByPKTaskValidator,controller,getTaskbyPK)

routerTask.put("/tasks/:id",updateTaskValidator,controller,taskUpdate)

routerTask.delete("/tasks/:id",deleteTaskValidator,controller,taskDelete)