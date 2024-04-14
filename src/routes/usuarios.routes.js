import { Router } from "express";
import { crearUsuario } from "../controllers/usuarios.controllers.js";

const router = Router();

router.route("/crear").post(crearUsuario);

//router.route("/").post(login);

export default router;
