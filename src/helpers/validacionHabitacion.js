import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validacionHabitacion = [
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

  check("imagen")
    .notEmpty()
    .withMessage("La imagen es un dato obligatorio")
    .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/)
    .withMessage(
      "La imagen debe ser una URL valida y terminar con alguna de las siguientes extensiones (jpg|gif|png|jpeg)"
    ),

  check("descripcion_breve")
    .notEmpty()
    .withMessage("La decripción breve es un dato obligatorio")
    .isLength({ min: 20, max: 100 })
    .withMessage("La descricion breve contener entre 20 y 100 caracteres"),

  check("descripcion_amplia")
    .notEmpty()
    .withMessage("La decripción amplia es un dato obligatorio")
    .isLength({ min: 50, max: 900 })
    .withMessage(
      "El descricion amplia debe contener entre 50 y 900 caracteres"
    ),

  check("estado")
    .notEmpty()
    .withMessage("El estado de la habitacion es un dato obligatorio")
    .isIn(["Disponible", "No disponible"])
    .withMessage(
      'El estado debe ser una de las siguientes opciones "Disponible", "No disponible"'
    ),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionHabitacion;
