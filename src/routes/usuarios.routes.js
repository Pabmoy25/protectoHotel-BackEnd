import { Router } from "express";
import {
  crearUsuario,
  leerUsuario,
  login,
  obtenerUsuarios,
} from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";

const router = Router();

router.route("/listar").get(leerUsuario);

router.route("/crear").post([validacionUsuario], crearUsuario) //[validacionUsuario],

router.route("/").post(login);

router
  .route("/:id")
  .get(obtenerUsuarios)


export default router;
