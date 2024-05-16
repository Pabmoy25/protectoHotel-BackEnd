import { Router } from "express";
import {
  borrarReserva,
  crearReservas,
  editarReserva,
  listarReservas,
  obtenerReserva,
} from "../controllers/reserva.controllers.js";
import validacionReserva from "../helpers/validacionReserva.js";
import validarJWT from "../helpers/validarJWT.js";

const router = Router();

router
  .route("/reservas")
  .get(listarReservas)
  .post([validarJWT, validacionReserva], crearReservas);

router
  .route("/reservas/:id")
  .delete([validarJWT], borrarReserva)
  .put([validarJWT, validacionReserva], editarReserva)
  .get(obtenerReserva);

export default router;
