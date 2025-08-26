import { body, param } from "express-validator";
import { Profile } from "../../models/profile.model.js";

export const createProfileValidator = [
  body("real_name")
    .custom(async (value) => {
      const existente = await User.findOne({ where: { real_name: value } });
      if (existente) {
        throw new Error("Este REAL_NAME ya esta en uso");
      }
    })
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
  param("id")
    .isInt()
    .withMessage("Tiene que ser un entero")
    .custom(async (value) => {
      const user = await Profile.findByPk(value);
      if (!user) throw new Error("El user no se ha podido encontrar");
    }),
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

export const findByPKProfileValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un entero")
    .custom(async (value) => {
      const profile = await Profile.findByPk(value);
      if (!profile) throw new Error("El PROFILE no se ha podido encontrar");
    }),
];

export const deleteProfileValidator = [
  param("id")
    .isInt()
    .withMessage("Tiene que ser un entero")
    .custom(async (value) => {
      const profile = await Profile.findByPk(value);
      if (!profile) throw new Error("El PROFILE no se ha podido encontrar");
    }),
];
