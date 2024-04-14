import { Router } from "express";
import { crearUsuario, login } from "../controllers/usuarios.controllers.js";
import { check } from "express-validator";

const router = Router();

router
  .route("/crear")
  .post(crearUsuario);

router.route("/").post(login);

export default router;
