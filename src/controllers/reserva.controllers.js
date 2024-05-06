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

export const reservaHabitacion = async (req, res) => {
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


export const borrarReserva = async (req, res) => {
  try {
    const reservaBorrada = await Reserva.findById(req.params.id);
    if (!reservaBorrada) {
      return res
        .status(404)
        .json({
          mensaje: "No se encontró la reserva con el id especificado",
        });
    }

    await Reserva.findByIdAndDelete(req.params.id, req.body);

    res
      .status(200)
      .json({ mensaje: "La reserva fue eliminada exitosamente" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Ocurrio un error no se pudo eliminar la reserva" });
  }
};
