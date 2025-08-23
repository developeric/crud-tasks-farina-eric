import { Router } from "express";
import { taskCreate, getTask, getTaskbyPK, taskUpdate, taskDelete } from "../controllers/task.controllers.js";

export const routerTask = Router();

routerTask.post("/tasks",taskCreate)

routerTask.get("/tasks",getTask)

routerTask.get("/tasks/:id",getTaskbyPK)

routerTask.put("/tasks/:id",taskUpdate)

routerTask.delete("/tasks/:id",taskDelete)