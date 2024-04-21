import { Router } from "express";
import {
  crearHabitaciones,
  listarHabitaciones,

} from "../controllers/habitaciones.controllers.js";
import validarJWT from "../helpers/validarJWT.js";

const router = Router();

router.route("/habitaciones").get(listarHabitaciones).post(/* [validarJWT], */crearHabitaciones);// [validarJWT] pide token antes de crear, agregarlo en editar y borrar

export default router;
