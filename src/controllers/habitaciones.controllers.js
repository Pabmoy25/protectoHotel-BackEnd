import { validationResult } from "express-validator";
import Habitacion from "../database/models/habitacion.js";

export const listarHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitacion.find();
    res.status(200).json(habitaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al buscar las habitaciones" });
  }
};

export const crearHabitaciones = async (req, res) => {
  try {
    const errors = validationResult(req);
   
    if(!errors.isEmpty()){
      return res.status(400).json({errors: errors.array()})
    }

    const nuevaHabitacion = new Habitacion(req.body);
    await nuevaHabitacion.save();

    res.status(201).json({
      mensaje: "La habitacion se creo exitosamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "La habitación no pudo ser creada",
    });
  }
};

export const obtenerHabitacion = async (req, res) => {
  try {
    console.log(req.params.id);
    const habitacionBuscada = await Habitacion.findById(req.params.id);

    if (!habitacionBuscada) {
      return res
        .status(404)
        .json({ mensaje: "La habitacion con el id enviado no existe" });
    }
    res.status(200).json(habitacionBuscada);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ mensaje: "No se pudo encontrar la habitacion solicitada" });
  }
};

export const borrarHabitacion = async (req, res) => {
  try {
    const habitacionborrada = await Habitacion.findById(req.params.id);
    if (!habitacionborrada) {
      return res
        .status(404)
        .json({
          mensaje: "No se encontró la habitación con el id especificado",
        });
    }

    await Habitacion.findByIdAndDelete(req.params.id, req.body);

    res
      .status(200)
      .json({ mensaje: "La habitación fue eliminada exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error no se pudo eliminar la habitación" });
  }
};

export const editarHabitacion = async (req, res) => {
  try {
    const habitacionBuscado = await Habitacion.findById(req.params.id);
    if (!habitacionBuscado) {
      return res
        .status(404)
        .json({
          mensaje: "No se encontro la habitacion con el id especificado",
        });
    }
    await Habitacion.findByIdAndUpdate(req.params.id, req.body);
    //responder al usuario
    res.status(200).json({ mensaje: "La Habitacion fue editada exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error no se pudo editar la habitacion" });
  }
};
