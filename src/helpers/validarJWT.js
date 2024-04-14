import jwt from 'jsonwebtoken';
import 'dotenv/config';

const validarJWT = (req, res, next) => {
  console.log(req.header);
  const token = req.header("x-token");
  if (!token) {
    return res.status(401).json({
      mensaje: "No ingresó el token en la peticion",
    });
  }
  // si el token existe
  try {
    const payload = jwt.verify(token, process.env.SECRET_JWT);
    req.nombreUsuario = payload.nombreUsuario;
    req.email = payload.email;
    next();
  } catch (error) {
    console.error("Error al verificar el token:", error.message);
    //error 401 es no autorizado
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({
        mensaje: "Token inválido",
      });
    } else if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        mensaje: "Token expirado",
      });
    } else {
      return res.status(401).json({
        mensaje: "Error de autenticación",
      });
    }
  }
};

export default validarJWT;