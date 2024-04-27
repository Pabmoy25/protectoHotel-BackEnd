import {Router} from "express";
import { crearReservas, listarReservas } from "../controllers/reserva.controllers.js";

const router = Router();

router
  .route("/reservas")
  .get(listarReservas)
  .post(crearReservas);

export default router