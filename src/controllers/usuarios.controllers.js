import Usuario from "../database/models/";

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
