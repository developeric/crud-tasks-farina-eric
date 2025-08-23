import { Router } from "express";
import { createLabel, getLabel, getLabelByPK } from "../controllers/label.controllers.js";

export const routerLabel = Router();

routerLabel.post("/label",createLabel)
routerLabel.get("/label",getLabel)
routerLabel.get("/label/:id",getLabelByPK)


