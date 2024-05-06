import {Router} from "express";
import { borrarReserva, crearReservas, listarReservas, reservaHabitacion } from "../controllers/reserva.controllers.js";

const router = Router();

router
  .route("/reservas")
  .get(listarReservas)
  .post(crearReservas)
  

  router
  .route("/reservas/:id")
  .put (reservaHabitacion)
  .delete(borrarReserva);
 

  
export default router