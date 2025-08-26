import { body } from "express-validator";

export const createTaskValidator = [
  body("title")
    .notEmpty()
    .withMessage("Este campo no puede estar vacío")
    .isString()
    .withMessage("El valor tiene que ser un String")
    .isLength({ min: 2, max: 150 })
    .withMessage("Tiene que ser mayor a 2 caracteres y menor a 150"),

  body("description")
    .isString()
    .withMessage("El campo solo admite datos de tipo String"),

  body("isComplete")
    .isBoolean()
    .withMessage("El valor tiene que ser Booleano")
    .notEmpty()
    .withMessage("No puede estar vacío"),
];

export const updateTaskValidator = [
  body("title")
    .optional()
    .notEmpty()
    .withMessage("Este campo no puede estar vacío")
    .isString()
    .withMessage("El valor tiene que ser un String")
    .isLength({ min: 2, max: 150 })
    .withMessage("Tiene que ser mayor a 2 caracteres y menor a 150"),

  body("description")
    .optional()
    .isString()
    .withMessage("El campo solo admite datos de tipo String"),

  body("isComplete")
    .optional()
    .isBoolean()
    .withMessage("El valor tiene que ser Booleano")
    .notEmpty()
    .withMessage("No puede estar vacío"),
];
