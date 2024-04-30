import Reserva from "../database/models/reservas.js";
import Habitacion from "../database/models/habitacion.js";

export const listarReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.status(200).json(reservas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al buscar las reservas" });
  }
};

export const crearReservas = async (req, res) => {
  try {
    const nuevaReserva = new Reserva(req.body);
    await nuevaReserva.save();

    res.status(201).json({
      mensaje: "La Reserva se creo exitosamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "La reserva no pudo ser creada",
    });
  }
};

export const obtenerReserva = async (req, res) => {
  try {
    console.log(req.params.id);
    const reservaBuscada = await Reserva.findById(req.params.id);

    if (!reservaBuscada) {
      return res
        .status(404)
        .json({ mensaje: "La reserva con el id enviado no existe" });
    }
    res.status(200).json(reservaBuscada);
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .json({ mensaje: "No se pudo encontrar la reserva solicitada" });
  }
};

export const crearReservasUsuario = async (req, res) => {
  try {
    const nuevaReserva = new Reserva(req.body);
    await nuevaReserva.save();

    res.status(201).json({
      mensaje: "La Reserva se creo exitosamente",
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "La reserva no pudo ser creada",
    });
  }
};