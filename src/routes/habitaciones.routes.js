import { Router } from "express";
import {
  crearHabitaciones,
  listarHabitaciones,
  borrarHabitacion,
  editarHabitacion,
  obtenerHabitacion,
} from "../controllers/habitaciones.controllers.js";
import { check } from "express-validator";
import validacionHabitacion from "../helpers/validacionHabitacion.js";

const router = Router();

router
  .route("/habitaciones")
  .get(listarHabitaciones)
  .post([validacionHabitacion], crearHabitaciones);
router
  .route("/habitaciones/:id")
  .get(obtenerHabitacion)
  .put([validacionHabitacion],editarHabitacion)
  .delete(borrarHabitacion);

export default router;
