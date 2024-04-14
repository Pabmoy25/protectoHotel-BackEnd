import { Router } from "express";
import { crearUsuario, login } from "../controllers/usuarios.controllers.js";
import { check } from "express-validator";

const router = Router();

router
  .route("/crear")
  .post(
    [
      check("nombreCompleto")
        .notEmpty()
        .withMessage("El nombre es obligatorio")
        .isLength({min: 4, max: 15})
        .withMessage("El nombre debe contener entre 4 y 15 caracteres"),
      check("")
    ],
    crearUsuario
  );

router.route("/").post(login);

export default router;
