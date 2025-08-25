import { body } from "express-validator";

export const createUserValidator = [
  body("name")
    .notEmpty()
    .withMessage(`No puede estar vacío`)
    .isString()
    .withMessage(`Tiene que ser un dato tipo String`),

  body("email")
    .isEmail()
    .withMessage(`El email no es valido`)
    .notEmpty()
    .withMessage(`No puede estar vacío`),

  body("password")
    .notEmpty()
    .withMessage("Su contraseña no puede estar vacía")
    .isLength({ min: 1, max: 100 })
    .withMessage(
      "La contraseña tiene que ser mayor a 1 caracter y menor a 100"),
];
