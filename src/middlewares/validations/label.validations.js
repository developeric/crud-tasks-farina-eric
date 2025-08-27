import { body, param } from "express-validator";
import { Label } from "../../models/label.model.js";

export const createLabelValidator = [
  body("name")
    .custom(async (value) => {
      const existente = await Label.findOne({ where: { name: value } });
      if (existente) {
        throw new Error("Este nombre ya esta en uso");
      }
    })
    .notEmpty()
    .withMessage("El Name no puede estar vacío")
    .isString()
    .withMessage("El valor de este campo tiene que ser STRING"),
];

export const updateLabelValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un entero")
    .custom(async (value) => {
      const label = await Label.findByPk(value);
      if (!label) throw new Error("El user no se ha podido encontrar");
    }),
  body("name")
    .optional()
    .notEmpty()
    .withMessage("El Name no puede estar vacío")
    .isString()
    .withMessage("El valor de este campo tiene que ser STRING"),
];

export const findByPKLabelValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un entero")
    .custom(async (value) => {
      const label = await Label.findByPk(value);
      if (!label) throw new Error("El TASK no se ha podido encontrar");
    }),
];

export const deleteLabelValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un entero")
    .custom(async (value) => {
      const label = await Label.findByPk(value);
      if (!label) throw new Error("El TASK no se ha podido encontrar");
    }),
];
