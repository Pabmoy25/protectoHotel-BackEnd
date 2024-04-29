import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
  
  habitacion: {
    type: String,
    required: true,
    minLengh: 2,
    MaxLength: 5,
    unique: true,
  },
   precio: {
    type: Number,
    required: true,
    min: 10000,
    Max: 100000,
  },
  tipoDeHabitacion: {
    type: String,
    required: true,
    enum: ["Estándar", "Doble", "Deluxe", "Suite"],
  },
  
  fechaEntrada: {
    type: Date,
    required: true,
  },
  fechaSalida: {
    type: Date,
    required: true,
  },
  telefono: {
    type: Number,
    required: true,
  },
  
  totalDeDias: {
    type: Number,
    required: true,
  },
  });


const Reserva = mongoose.model("reserva", reservaSchema);
export default Reserva;