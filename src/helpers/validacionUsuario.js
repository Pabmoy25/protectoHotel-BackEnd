import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionUsuario=[
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
      .matches(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i)
      .withMessage("El e-mail es inválido"),

      (req,res,next)=>resultadoValidacion(req,res,next)
  ]

  export default validacionUsuario;