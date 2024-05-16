import { Router } from "express";
import {
  crearUsuario,
  editarUsuarios,
  leerUsuario,
  login,
  obtenerUsuarios,
  borrarUsuario,
} from "../controllers/usuarios.controllers.js";
import validacionUsuario from "../helpers/validacionUsuario.js";
import validarJWT from "../helpers/validarJWT.js";

const router = Router();

router.route("/listar").get(leerUsuario);

router.route("/crear").post([validarJWT, validacionUsuario], crearUsuario); //[validacionUsuario],

router.route("/").post(login);

router
  .route("/:id")
  .get(obtenerUsuarios)
  .put([validarJWT], editarUsuarios)
  .delete([validarJWT], borrarUsuario);

export default router;
