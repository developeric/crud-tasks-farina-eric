import { Router } from "express";
import { createLabel, deleteLabel, getLabel, getLabelByPK, updateLabel } from "../controllers/label.controllers.js";
import { controller } from "../middlewares/validator.js";
import { createLabelValidator, updateLabelValidator } from "../middlewares/validations/label.validations.js";

export const routerLabel = Router();

routerLabel.post("/label",createLabelValidator,controller,createLabel)
routerLabel.get("/label",getLabel)
routerLabel.put("/label/:id",updateLabelValidator,controller,updateLabel)
routerLabel.get("/label/:id",getLabelByPK)
routerLabel.delete("/label/:id",deleteLabel)

