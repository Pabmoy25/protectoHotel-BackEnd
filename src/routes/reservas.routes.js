import {Router} from "express";
import { borrarReserva, crearReservas, listarReservas} from "../controllers/reserva.controllers.js";

const router = Router();

router
  .route("/reservas")
  .get(listarReservas)
  .post(crearReservas)
  

  router
  .route("/reservas/:id")
  .delete(borrarReserva);
 

  
export default router