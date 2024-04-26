import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
  
  habitacion_id: {
    type: String,
    required: true,
    minLengh: 2,
   },
  usuario_id: {
    type: String,
    required: true,
   },
  fechaEntrada: {
    type: String,
    required: true,
  },
  fechaSalida: {
    type: String,
    required: true,
  },
  precioTotal: {
    type: String,
    required: true,
  },
  TotalDeDias: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    required: true,
    enum: ["Disponible", "No disponible"],
  },
});

const Reserva = mongoose.model("reserva", reservaSchema);
export default Reserva;