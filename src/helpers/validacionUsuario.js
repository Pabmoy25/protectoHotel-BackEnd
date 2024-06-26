import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionUsuario = [
  check("nombreCompleto")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3, max: 50 })
    .withMessage("El nombre debe contener entre 4 y 50 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("El e-mail es obligatorio")
    .isLength({ min: 13, max: 40 })
    .withMessage("El e-mail debe contener entre 13 y 30 caracteres")
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/)
    .withMessage("El e-mail es inválido"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 3, max: 8 })
    .withMessage("La contraseña debe contener hasta 8 caracteres")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage("La contraseña es inválida"),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
