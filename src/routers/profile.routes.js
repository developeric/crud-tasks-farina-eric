import { Router } from "express";
import { createProfile,deleteProfile,getProfile,getProfileByPK } from "../controllers/profile.controllers.js";

export const routerProfile = Router();

routerProfile.post("/profile",createProfile)
routerProfile.get("/profile",getProfile)
routerProfile.get("/profile/:id",getProfileByPK)
routerProfile.delete("/profile/:id",deleteProfile)



