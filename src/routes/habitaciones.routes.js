import { Router } from "express";
import {
  crearHabitaciones,
  listarHabitaciones,
  borrarHabitacion,
  editarHabitacion,
} from "../controllers/habitaciones.controllers.js";
import validarJWT from "../helpers/validarJWT.js";

const router = Router();

router
  .route("/habitaciones")
  .get(listarHabitaciones)
  .post(/* [validarJWT], */ crearHabitaciones); // [validarJWT] pide token antes de crear, agregarlo en editar y borrar
router
  .route("/habitaciones/:id")
  .put(/* [validarJWT], */ editarHabitacion)
  .delete(borrarHabitacion);

export default router;
