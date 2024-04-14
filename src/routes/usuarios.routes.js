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
        .isLength({ min: 4, max: 15 })
        .withMessage("El nombre debe contener entre 4 y 15 caracteres"),
      check("email")
        .notEmpty()
        .withMessage("El e-mail es obligatorio")
        .isLength({ min: 15, max: 30 })
        .withMessage("El e-mail debe contener entre 15 y 30 caracteres")
        .isEmail()
        .withMessage("El e-mail es inválido")
    ],
    crearUsuario
  );

router.route("/").post(login);

export default router;
