import { body } from "express-validator";

export const createLabelValidator = [
  body("name")
    .notEmpty()
    .withMessage("El Name no puede estar vacío")
    .isString()
    .withMessage("El valor de este campo tiene que ser STRING"),
];

export const updateLabelValidator = [
  body("name")
    .optional()
    .notEmpty()
    .withMessage("El Name no puede estar vacío")
    .isString()
    .withMessage("El valor de este campo tiene que ser STRING"),
];
