import { Router } from "express";
import { createLabelTask, getLabelTask, getLabelTaskByPK, updateLabelTask } from "../controllers/label.task.controllers.js";
import { controller } from "../middlewares/validator.js";
import { createLabelTaskValidator, updateLabelTaskValidator } from "../middlewares/validations/label.task.validations.js";

export const routerLabelTask = Router();

routerLabelTask.post("/labeltask",createLabelTaskValidator,controller,createLabelTask)
routerLabelTask.get("/labeltask",getLabelTask)
routerLabelTask.get("/labeltask/:id",getLabelTaskByPK)
routerLabelTask.put("/labeltask/:id",updateLabelTaskValidator,controller,updateLabelTask)
