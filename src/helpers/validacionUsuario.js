import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionUsuario = [
  check("nombreCompleto")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 4, max: 15 })
    .withMessage("El nombre debe contener entre 4 y 15 caracteres"),
  check("email")
    .notEmpty()
    .withMessage("El e-mail es obligatorio")
    .isLength({ min: 15, max: 30 })
    .withMessage("El e-mail debe contener entre 15 y 30 caracteres")
    .matches(
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
    )
    .withMessage("El e-mail es inválido"),
  check("password")
    .notEmpty()
    .withMessage("La contraseña es obligatoria")
    .isLength({ min: 6, max: 10 })
    .withMessage("La contraseña debe contener entre 6 y 10 caracteres")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/)
    .withMessage("La contraseña es inválida"),
  check("role")
    .notEmpty()
    .withMessage("El rol es obligatorio")
    .isLength({ min: 7, max: 13 })
    .withMessage("El rol debe contener entre 7 y 13 caracteres"),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionUsuario;
