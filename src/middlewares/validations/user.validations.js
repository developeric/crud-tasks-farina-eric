import { body, param } from "express-validator";
import { User } from "../../models/user.model.js";

export const createUserValidator = [
  body("name")
    .custom(async (value) => {
      const existente = await User.findOne({ where: { name: value } });
      if (existente) {
        throw new Error("Este nombre ya esta en uso");
      }
    })
    .notEmpty()
    .withMessage(`No puede estar vacío`)
    .isString()
    .withMessage(`Tiene que ser un dato tipo String`),

  body("email")
      .custom(async (value) => {
      const existente = await User.findOne({ where: { email: value } });
      if (existente) {
        throw new Error("Este EMAIL ya esta en uso");
      }
    })
    .isEmail()
    .withMessage(`El email no es valido`)
    .notEmpty()
    .withMessage(`No puede estar vacío`),

  body("password")
    .notEmpty()
    .withMessage("Su contraseña no puede estar vacía")
    .isLength({ min: 1, max: 100 })
    .withMessage(
      "La contraseña tiene que ser mayor a 1 caracter y menor a 100"
    ),
];

export const updateUserValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un entero")
    .custom(async (value) => {
      const user = await User.findByPk(value);
      if (!user) throw new Error("El user no se ha podido encontrar");
    }),
  body("name")
    .optional()
    .notEmpty()
    .withMessage(`No puede estar vacío`)
    .isString()
    .withMessage(`Tiene que ser un dato tipo String`),

  body("email")
    .optional()
    .isEmail()
    .withMessage(`El email no es valido`)
    .notEmpty()
    .withMessage(`No puede estar vacío`),

  body("password")
    .optional()
    .notEmpty()
    .withMessage("Su contraseña no puede estar vacía")
    .isLength({ min: 1, max: 100 })
    .withMessage(
      "La contraseña tiene que ser mayor a 1 caracter y menor a 100"
    ),
];

export const findByPKUserValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un entero")
    .custom(async (value) => {
      const user = await User.findByPk(value);
      if (!user) throw new Error("El user no se ha podido encontrar");
    }),
];

export const deleteUserValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un entero")
    .custom(async (value) => {
      const user = await User.findByPk(value);
      if (!user) throw new Error("El user no se ha podido encontrar");
    }),
];
