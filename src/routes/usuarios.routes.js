import { Router } from "express";
import {
  crearUsuario,
  leerUsuario,
  login,
} from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";

const router = Router();

router.route("/listar").get(leerUsuario);

router.route("/crear").post([validacionUsuario], crearUsuario); //[validacionUsuario],

router.route("/").post(login);

export default router;
