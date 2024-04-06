import { Router } from "express";
import {
  crearHabitaciones,
  listarHabitaciones,
} from "../controllers/habitaciones.controllers.js";

const router = Router();

router.route("/habitaciones").get(listarHabitaciones).post(crearHabitaciones);

export default router;
