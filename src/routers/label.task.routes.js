import { Router } from "express";
import { createLabelTask, getLabelTask, getLabelTaskByPK } from "../controllers/label.task.controllers.js";

export const routerLabelTask = Router();

routerLabelTask.post("/labeltask",createLabelTask)
routerLabelTask.get("/labeltask",getLabelTask)
routerLabelTask.all("/labeltask/:id",getLabelTaskByPK)
