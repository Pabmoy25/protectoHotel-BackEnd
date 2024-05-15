import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionReserva = [
  check("habitacion")
    .notEmpty()
    .withMessage("El número de habitacion es un dato obligatorio")
    .isLength({ min: 2, max: 5 })
    .withMessage("El número de habitacion debe tener entre 2 y 5 caracteres"),

  check("precio")
    .notEmpty()
    .withMessage("El precio es un dato obligatorio")
    .isNumeric()
    .withMessage("El precio debe ser un número")
    .custom((value) => {
      if (value > 10000 && value < 100000) {
        return true;
      } else {
        throw new Error("El precio debe estar entre $10.000 y $100.000");
      }
    }),

  check("tipoDeHabitacion")
    .notEmpty()
    .withMessage("El tipo de habitacion es un dato obligatorio")
    .isIn(["Estándar", "Doble", "Deluxe", "Suite"])
    .withMessage(
      'El tipo de habitacion debe ser una de las siguientes opciones "Estándar", "Doble", "Deluxe", "Suite"'
    ),

  check("nombreCompleto")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 3, max: 50 })
    .withMessage("El nombre debe contener entre 4 y 50 caracteres"),

  check("email")
    .notEmpty()
    .withMessage("El e-mail es obligatorio")
    .isLength({ min: 10, max: 40 })
    .withMessage("El e-mail debe contener entre 15 y 30 caracteres")
    .matches(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),

  check("telefono")
    .notEmpty()
    .withMessage("El telefono es obligatorio")
    .matches(/^[0-9]{10}$/)
    .withMessage("El telefono debe tener 10 digitos"),

  check("totalDeDias")
    .notEmpty()
    .withMessage("El total de días es obligatorio"),

  check("fechaEntrada")
    .notEmpty()
    .withMessage("La fecha de entrada es obligatoria"),

  check("fechaSalida")
    .notEmpty()
    .withMessage("La fecha de salida es obligatoria"),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionReserva;
