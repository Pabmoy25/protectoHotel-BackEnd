import Usuario from "../database/models/usuarios.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuarioBuscado = await Usuario.findOne({ email });

    if (usuarioBuscado) {
      return res
        .status(400)
        .json({ mensaje: "El correo ya se encuentra registrado" });
    }
    const nuevoUsuario = new Usuario(req.body);

    const salt = bcrypt.genSaltSync(10);

    nuevoUsuario.password = bcrypt.hashSync(password, salt);

    nuevoUsuario.save();
    res.status(201).json({
      mensaje: "Usuario creado correctamente",
      email: nuevoUsuario.email,
      nombre: nuevoUsuario.nombreCompleto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al intentar crear un usuario" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const usuarioBuscado = await Usuario.findOne({ email });

    if (!usuarioBuscado) {
      return res
        .status(400)
        .json({ mensaje: "El correo o la contraseña son incorrectos" });
    }

    const passwordValido = bcrypt.compareSync(
      password,
      usuarioBuscado.password
    );

    if (!passwordValido) {
      return res
        .status(400)
        .json({ mensaje: "El correo o la contraseña son incorrectos" });
    }

    res.status(202).json({
      mensaje: "Usuario existente",
      email: usuarioBuscado.email,
      nombre: usuarioBuscado.nombreCompleto,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al intentar loguear un usuario" });
  }
};
