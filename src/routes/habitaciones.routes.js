import { Router } from "express";
import {
  crearHabitaciones,
  listarHabitaciones,
  borrarHabitacion,
  editarHabitacion,
  obtenerHabitacion,

} from "../controllers/habitaciones.controllers.js";
import validarJWT from "../helpers/validarJWT.js";

const router = Router();

router
  .route("/habitaciones")
  .get(listarHabitaciones)
  .post(/* [validarJWT], */ crearHabitaciones); // [validarJWT] pide token antes de crear, agregarlo en editar y borrar
router
  .route("/habitaciones/:id").get(obtenerHabitacion)
  .put(/* [validarJWT], */ editarHabitacion)
  .delete(borrarHabitacion);
  

export default router;
