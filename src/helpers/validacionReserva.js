import { check } from "express-validator";
import resultadoValidacionReserva from "./resultadoValidacion.js";

const validacionReserva = [
  check("habitacion")
    .notEmpty()
    .withMessage("El número de habitacion es un dato obligatorio")
    .isLength({ min: 2, max: 5 })
    .withMessage("El número de habitacion debe tener entre 2 y 5 caracteres"),

 

    (req, res, next) => resultadoValidacionReserva(req, res, next),
];



export default validacionReserva;
