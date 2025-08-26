import { Router } from "express";
import { createProfile,deleteProfile,getProfile,getProfileByPK, updateProfile } from "../controllers/profile.controllers.js";
import { controller } from "../middlewares/validator.js";
import { createProfileValidator, updateProfileValidator } from "../middlewares/validations/profile.validations.js";

export const routerProfile = Router();

routerProfile.post("/profile",createProfileValidator,controller,createProfile)
routerProfile.get("/profile",getProfile)
routerProfile.put("/profile/:id",updateProfileValidator,controller,updateProfile)
routerProfile.get("/profile/:id",getProfileByPK)
routerProfile.delete("/profile/:id",deleteProfile)



