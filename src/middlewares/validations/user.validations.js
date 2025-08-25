import { body } from "express-validator";

app.post(`/users`,body(`email`).notEmpty(),controller);