import { body } from "express-validator";

export const createProfileValidator = [
  body("real_name")
    .notEmpty()
    .withMessage("No puede estar vacío este campo")
    .isString()
    .withMessage("Este parametro tiene que ser string")
    .isLength({ min: 2, max: 150 })
    .withMessage("Tiene que tener minimo 2 caracteres y maximo 150"),

  body("description")
    .isString()
    .withMessage("Este parametro solo acepta Strings"),

  body("age")
    .isInt()
    .withMessage("Edad debe ser entero.")
    .custom((age) => {
      if (age < 18) throw new Error("Debes ser mayor a 18 años.");
      return true;
    })
    .notEmpty()
    .withMessage("Este campo no puede estar vacio"),
];

export const updateProfileValidator = [
  body("real_name")
    .optional()
    .notEmpty()
    .withMessage("No puede estar vacío este campo")
    .isString()
    .withMessage("Este parametro tiene que ser string")
    .isLength({ min: 2, max: 150 })
    .withMessage("Tiene que tener minimo 2 caracteres y maximo 150"),

  body("description")
    .optional()
    .isString()
    .withMessage("Este parametro solo acepta Strings"),

  body("age")
    .optional()
    .isInt()
    .withMessage("Edad debe ser entero.")
    .custom((age) => {
      if (age < 18) throw new Error("Debes ser mayor a 18 años.");
      return true;
    })
    .notEmpty()
    .withMessage("Este campo no puede estar vacio"),
];
