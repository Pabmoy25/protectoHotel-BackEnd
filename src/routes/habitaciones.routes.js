import { Router } from "express";
import {
  crearHabitaciones,
  listarHabitaciones,
  borrarHabitacion,
  editarHabitacion,
  obtenerHabitacion,
} from "../controllers/habitaciones.controllers.js";
import validacionHabitacion from "../helpers/validacionHabitacion.js";
import validarJWT from "../helpers/validarJWT.js";

const router = Router();

router
  .route("/habitaciones")
  .get(listarHabitaciones)
  .post([validarJWT, validacionHabitacion], crearHabitaciones);
router
  .route("/habitaciones/:id")
  .get(obtenerHabitacion)
  .put([validarJWT, validacionHabitacion],editarHabitacion)
  .delete([validarJWT], borrarHabitacion);



export default router;
