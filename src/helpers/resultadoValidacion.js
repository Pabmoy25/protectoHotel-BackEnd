import { validationResult } from "express-validator";

const resultadoValidacion=(req, res, next)=>{
    const errorsValidacion= validationResult(req);

    if(!errorsValidacion.isEmpty()){
      return res.status(400).json({errores:errorsValidacion.array()})
    }

    next();
}

export default resultadoValidacion;


