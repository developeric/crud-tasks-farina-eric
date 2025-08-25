import { body } from "express-validator";
import { Profile } from "../../models/profile.model.js";

export const createProfileValdiator = [
  body("real_name")
    .notEmpty()
    .withMessage("No puede estar vacío este campo")
    .isString()
    .withMessage("Este parametro tiene que ser string")
    .isLength({ min: 2, max: 150 })
    .withMessage("Tiene que tener minimo 2 caracteres y maximo 150"),

  body("description").isString().withMessage("Este parametro solo acepta Strings"),

  body("age")
  .isInt().withMessage("Edad debe ser entero.")
  .custom((age)=>{
    if(age < 18)
        throw new Error("Debes ser mayor a 18 años.")
    return true
  }).notEmpty().withMessage("Este campo no puede estar vacio")
];
