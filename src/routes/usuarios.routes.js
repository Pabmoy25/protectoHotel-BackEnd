import { Router } from "express";
import { crearUsuario, login } from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";


const router = Router();

router
  .route("/crear")
  .post([validacionUsuario],crearUsuario);

router.route("/").post(login);

export default router;
