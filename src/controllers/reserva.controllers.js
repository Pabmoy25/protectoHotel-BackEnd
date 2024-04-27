import Reserva from "../database/models/reservas.js";

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