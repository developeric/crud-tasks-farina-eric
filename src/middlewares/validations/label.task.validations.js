import { body } from "express-validator";

export const createLabelTaskValidator = [
  body("task_id")
    .notEmpty()
    .withMessage("No puede estar vacío")
    .isInt()
    .withMessage("El valor tiene que ser INTEGER"),

  body("label_id")
    .notEmpty()
    .withMessage("No puede estar vacío")
    .isInt()
    .withMessage("El valor tiene que ser INTEGER"),
];

export const updateLabelTaskValidator = [
  body("task_id")
    .optional()
    .notEmpty()
    .withMessage("No puede estar vacío")
    .isInt()
    .withMessage("El valor tiene que ser INTEGER"),

  body("label_id")
    .optional()
    .notEmpty()
    .withMessage("No puede estar vacío")
    .isInt()
    .withMessage("El valor tiene que ser INTEGER"),
];
