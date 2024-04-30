import {Router} from "express";
import { crearReservas, crearReservasUsuario, listarReservas, obtenerReserva } from "../controllers/reserva.controllers.js";

const router = Router();

router
  .route("/reservas")
  .get(listarReservas)
  .post(crearReservas);
  
  router
  .route("/reservas/:id")
  .get(obtenerReserva)
  router
  .route("/reservas/:id")
  .post(crearReservasUsuario)

export default router