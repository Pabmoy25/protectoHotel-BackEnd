import { Router } from "express";
import {
  crearHabitaciones,
  listarHabitaciones,
  borrarHabitacion,

} from "../controllers/habitaciones.controllers.js";
import validarJWT from "../helpers/validarJWT.js";

const router = Router();

router.route("/habitaciones").get(listarHabitaciones).post(/* [validarJWT], */crearHabitaciones).delete(borrarHabitacion);

export default router;
