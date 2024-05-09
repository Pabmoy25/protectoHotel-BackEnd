import Usuario from "../database/models/usuarios.js";
import Admin from "../database/models/admin.js";
import bcrypt from "bcrypt";
import generarJWT from "../helpers/generarJWT.js";
import { validationResult } from "express-validator";

export const leerUsuario = async (req, res) => {
  try {
    const usuarios = await Usuario.find(); //preg si usuarios es vacio
    res.status(200).json(usuarios);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al buscar usuarios" });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    const errorCrear = validationResult(req);
    if (!errorCrear.isEmpty()) {
      return res.status(400).json({ errores: errorCrear.array() });
    }

    const { email, password } = req.body;

    const usuarioBuscado = await Usuario.findOne({ email });

    if (usuarioBuscado) {
      return res
        .status(400)
        .json({ mensaje: "El correo ya se encuentra registrado" });
    }

    if (email === "admin@hakuhuasi.com.ar") {
      const admin = new Admin(req.body);
      admin.roleAdmin = true;
      const salt = bcrypt.genSaltSync(10);

      admin.password = bcrypt.hashSync(password, salt);

      console.log(admin);

      admin.save();

      res.status(201).json({
        mensaje: "Usuario admin creado correctamente",
        email: admin.email,
        nombre: admin.nombreCompleto,
        rolAdmin: admin.rolAdmin
      });
    } else {
      const nuevoUsuario = new Usuario(req.body);

      const salt = bcrypt.genSaltSync(10);

      nuevoUsuario.password = bcrypt.hashSync(password, salt);

      console.log(nuevoUsuario);

      nuevoUsuario.save();
      res.status(201).json({
        mensaje: "Usuario creado correctamente",
        rol: nuevoUsuario.roleAdmin,
        email: nuevoUsuario.email,
        nombre: nuevoUsuario.nombreCompleto,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al intentar crear un usuario" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuarioBuscado = await Usuario.findOne({ email });

    console.log(usuarioBuscado);

    if (!usuarioBuscado) {
      return res
        .status(400)
        .json({ mensaje: "El correo o la contraseña son incorrectos" });
    } else {
      const passwordValido = bcrypt.compareSync(
        password,
        usuarioBuscado.password
      );

      if (!passwordValido) {
        return res
          .status(400)
          .json({ mensaje: "El correo o la contraseña son incorrectos" });
      }

      const token = await generarJWT(
        usuarioBuscado.nombreCompleto,
        usuarioBuscado.email
      );

      res.status(200).json({
        mensaje: "Usuario existente",
        email: usuarioBuscado.email,
        nombre: usuarioBuscado.nombreCompleto,
        token,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al intentar loguear un usuario" });
  }
};

export const obtenerUsuarios = async (req, res) => {
  try {
    console.log(req.params.id);
    const usuarioBuscado = await Usuario.findById(req.params.id);

    if (!usuarioBuscado) {
      return res.status(404).json({ mensaje: "El usuario no existe" });
    }
    res.status(200).json(usuarioBuscado);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ mensaje: "No se pudo encontrar el usuario solicitado" });
  }
};

export const editarUsuarios = async (req, res) => {
  try {
    const usuarioBuscado = await Usuario.findById(req.params.id);
    if (!usuarioBuscado) {
      return res.status(404).json({
        mensaje: "El usuario no existe",
      });
    }
    await Usuario.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({ mensaje: "El Usuario fue editado exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "No se pudo encontrar el usuario solicitado" });
  }
};
