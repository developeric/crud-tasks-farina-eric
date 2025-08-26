import { Router } from "express";
import { getUser,getUserbyPK,updateUser,deleteUser,createUser } from "../controllers/user.controllers.js";
import { createUserValidator,deleteUserValidator,findByPKUserValidator,updateUserValidator } from "../middlewares/validations/user.validations.js";
import { controller } from "../middlewares/validator.js";
export const routerUser = Router();

routerUser.post("/users",createUserValidator,controller,createUser)

routerUser.get("/users",controller,getUser)

routerUser.get("/users/:id",findByPKUserValidator,controller,getUserbyPK)

routerUser.put("/users/:id",updateUserValidator,controller,updateUser)

routerUser.delete("/users/:id",deleteUserValidator,controller,deleteUser)