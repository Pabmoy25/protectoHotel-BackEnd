import mongoose, { Schema } from "mongoose";

const reservaSchema = new Schema({
  nombreCompleto: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
    validate: {
      validator: (value) => {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return pattern.test(value);
      },
    },
  },
  email: {
    type: String,
    require: true,
    validate: {
      validator: (value) => {
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return pattern.test(value);
      },
    },
    minLength: 10,
    maxLength: 40,
  },
  habitacion: {
    type: String,
    required: true,
    minLength: 2,
    MaxLength: 5,
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
    validate: {
      validator: (value) => {
        const pattern = /^[0-9]{10}$/;
        return pattern.test(value);
      },
    },
  },

  totalDeDias: {
    type: Number,
    required: true,
    min: 1,
    Max: 30,
  },
});

const Reserva = mongoose.model("reserva", reservaSchema);
export default Reserva;
