import {Router} from "express";
import { crearReservas, listarReservas, obtenerReserva } from "../controllers/reserva.controllers.js";

const router = Router();

router
  .route("/reservas")
  .get(listarReservas)
  .post(crearReservas);
  router
  .route("/reservas/:id")
  .get(obtenerReserva)

export default router