import {Router} from "express";
import { borrarReserva, crearReservas, editarReserva, listarReservas, obtenerReserva} from "../controllers/reserva.controllers.js";
import validacionReserva from "../helpers/validacionReserva.js";

const router = Router();

router
  .route("/reservas")
  .get(listarReservas)
  .post([validacionReserva],crearReservas)
  

  router
  .route("/reservas/:id")
  .delete(borrarReserva)
  .put([validacionReserva], editarReserva)
  .get (obtenerReserva)

  
export default router