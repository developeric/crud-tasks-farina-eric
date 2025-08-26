import { Router } from "express";
import { createLabelTask, deleteLabelTask, getLabelTask, getLabelTaskByPK, updateLabelTask } from "../controllers/label.task.controllers.js";
import { controller } from "../middlewares/validator.js";
import { createLabelTaskValidator, deleteLabelTaskValidator, findByPKLabelTaskValidator, updateLabelTaskValidator } from "../middlewares/validations/label.task.validations.js";

export const routerLabelTask = Router();

routerLabelTask.post("/labeltask",createLabelTaskValidator,controller,createLabelTask)
routerLabelTask.get("/labeltask",controller,getLabelTask)
routerLabelTask.get("/labeltask/:id",findByPKLabelTaskValidator,controller,getLabelTaskByPK)
routerLabelTask.put("/labeltask/:id",updateLabelTaskValidator,controller,updateLabelTask)
routerLabelTask.delete("/labeltask/:id",deleteLabelTaskValidator,controller,deleteLabelTask)
