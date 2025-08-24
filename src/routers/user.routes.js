import { Router } from "express";
import { getUser,getUserbyPK,updateUser,deleteUser,createUser } from "../controllers/user.controllers.js";

export const routerUser = Router();

routerUser.post("/users",createUser)

routerUser.get("/users",getUser)

routerUser.get("/users/:id",getUserbyPK)

routerUser.put("/users/:id",updateUser)

routerUser.delete("/users/:id",deleteUser)