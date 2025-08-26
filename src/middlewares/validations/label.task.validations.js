import { body ,param} from "express-validator";
import { LabelTask } from "../../models/label.task.model.js";

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
  param("id")
      .isInt()
      .withMessage("Tiene que ser un entero")
      .custom(async (value) => {
        const user = await LabelTask.findByPk(value);
        if (!user) throw new Error("El user no se ha podido encontrar");
      }),
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

export const findByPKLabelTaskValidator = [
      param("id")
        .isInt()
        .withMessage("Tiene que ser un entero")
        .custom(async (value) => {
          const labeltask = await LabelTask.findByPk(value);
          if (!labeltask) throw new Error("El LABELTASK no se ha podido encontrar");
        }),
];

export const deleteLabelTaskValidator = [
      param("id")
        .isInt()
        .withMessage("Tiene que ser un entero")
        .custom(async (value) => {
          const labeltask = await LabelTask.findByPk(value);
          if (!labeltask) throw new Error("El LABELTASK no se ha podido encontrar");
        }),
];

