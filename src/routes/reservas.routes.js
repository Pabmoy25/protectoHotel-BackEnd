import {Router} from "express";
import { borrarReserva, crearReservas, editarReserva, listarReservas, obtenerReserva} from "../controllers/reserva.controllers.js";

const router = Router();

router
  .route("/reservas")
  .get(listarReservas)
  .post(crearReservas)
  

  router
  .route("/reservas/:id")
  .delete(borrarReserva)
  .put(editarReserva)
  .get (obtenerReserva)

  
export default router