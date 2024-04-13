import Habitacion from "../database/models/habitacion.js";

export const listarHabitaciones = (req, res) => {
  console.log("aqui preparo la lista de habitaciones");
  res.send("Enviando la lista de habitaciones");
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
