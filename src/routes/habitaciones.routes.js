import { Router } from "express";
import {
  crearHabitaciones,
  listarHabitaciones,
  borrarHabitacion,
  editarHabitacion,
  obtenerHabitacion,
} from "../controllers/habitaciones.controllers.js";
import { check } from "express-validator";

const router = Router();

router
  .route("/habitaciones")
  .get(listarHabitaciones)
  .post(
    [
      check("habitacion")
        .notEmpty()
        .withMessage("El número de habitacion es un dato obligatorio")
        .isLength({min: 2, max: 5})
        .withMessage('El número de habitacion debe tener entre 2 y 5 caracteres'),
        check("precio")
        .notEmpty()
        .withMessage("El precio es un dato obligatorio")
        .isNumeric()
        .withMessage('El precio debe ser un número'),


        check ('tipoDeHabitacion')
        .notEmpty()
       .withMessage("El número de habitacion es un dato obligatorio"),

       check ('imagen')
       .notEmpty()
       .withMessage("El número de habitacion es un dato obligatorio"),

       check ('descripcion_breve')
       .notEmpty()
       .withMessage("El número de habitacion es un dato obligatorio"),

        check ('descripcion_amplia')
        .notEmpty()
        .withMessage("El número de habitacion es un dato obligatorio"),

       check ('estado')
       .notEmpty()
       .withMessage("El número de habitacion es un dato obligatorio"),



      ],
    crearHabitaciones
  );
router
  .route("/habitaciones/:id")
  .get(obtenerHabitacion)
  .put(editarHabitacion)
  .delete(borrarHabitacion);

export default router;
