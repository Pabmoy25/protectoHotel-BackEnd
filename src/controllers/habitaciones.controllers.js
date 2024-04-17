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
