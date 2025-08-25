import { Router } from "express";
import { getUser,getUserbyPK,updateUser,deleteUser,createUser } from "../controllers/user.controllers.js";
import { createUserValidator } from "../middlewares/validations/user.validations.js";
import { controller } from "../middlewares/validator.js";
export const routerUser = Router();

routerUser.post("/users",createUserValidator,controller,createUser)

routerUser.get("/users",getUser)

routerUser.get("/users/:id",getUserbyPK)

routerUser.put("/users/:id",updateUser)

routerUser.delete("/users/:id",deleteUser)