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

const router = Router();

router.route("/listar").get(leerUsuario);

router.route("/crear").post([validacionUsuario], crearUsuario) //[validacionUsuario],

router.route("/").post(login);

router.route("/eliminar/:id").delete(borrarUsuario);


router
  .route("/:id")
  .get(obtenerUsuarios)
  .put(editarUsuarios)
  .delete(borrarUsuario);

  


export default router;
