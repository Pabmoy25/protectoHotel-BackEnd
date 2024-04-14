import jwt  from "jsonwebtoken";
import 'dotenv/config';

const generarJWT = async (nombreUsuario, email)=>{
    try {
        const payload = { nombreUsuario, email };
        const token = await jwt.sign(payload, process.env.SECRET_JWT, {
            expiresIn: '3h' // o null para q no expire
        });
        return token;
    } catch (error) {
        console.error('Error al generar el token:', error.message);
        throw new Error('No se pudo generar el token');
    }
}
export default generarJWT