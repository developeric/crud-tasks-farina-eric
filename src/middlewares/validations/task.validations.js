import { body,param } from "express-validator";
import { Task } from "../../models/task.model.js";


export const createTaskValidator = [
  body("title")
      .custom(async (value) => {
        const existente = await User.findOne({ where: { title: value } });
        if (existente) {
          throw new Error("Este TITLE ya esta en uso");
        }
      })
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
    param("id")
    .isInt()
    .withMessage("Tiene que ser un entero")
    .custom(async (value) => {
      const user = await Task.findByPk(value);
      if (!user) throw new Error("El user no se ha podido encontrar");
    }),
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

export const findByPKTaskValidator = [
    param("id")
      .isInt()
      .withMessage("Tiene que ser un entero")
      .custom(async (value) => {
        const task = await Task.findByPk(value);
        if (!task) throw new Error("El TASK no se ha podido encontrar");
      }),
];

export const deleteTaskValidator = [
    param("id")
      .isInt()
      .withMessage("Tiene que ser un entero")
      .custom(async (value) => {
        const task = await Task.findByPk(value);
        if (!task) throw new Error("El TASK no se ha podido encontrar");
      }),
];