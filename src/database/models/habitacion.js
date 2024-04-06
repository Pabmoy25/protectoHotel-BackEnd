import mongoose, { Schema } from "mongoose";

const habitacionSchema = new Schema({
  habitacion: {
    type: String,
    required: true,
    minLengh: 2,
    MaxLength: 10,
    unique: true,
  },
  tipoDeHabitacion: {
    type: String,
    required: true,
    enum: ["Estándar", "Deluxe", "Suite"],
  },
  precio: {
    type: Number,
    required: true,
    min: 10000,
    Max: 90000,
  },
  imagen: {
    type: String,
    required: true,
    validate: (valor) => {
      return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/.test(valor);
    },
    message: (dato) => `${dato.value} no es una URL de imagen valida`,
  },
  descripcion_breve: {
    type: String,
    required: true,
    minLengh: 5,
    MaxLength: 40,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLengh: 50,
    MaxLength: 500,
  },
  fechaEntrada: {
    type: Date,
    required: true,
  },
  fechaSalida: {
    type: Date,
    required: true,
  },
  numeroDeHuespedes: {
    type: Number,
    required: true,
    min: 1,
    Max: 6,
  },
  estado: {
    type: String,
    required: true,
    enum: ["pendiente", "confirmada", "cancelada"],
    default: "pendiente",
  },
  precioTotal: {
    type: Number,
    required: true,
    min: 10000,
    Max: 990000,
  },
});

const Habitacion = mongoose.model('habitacion', habitacionSchema);

export default Habitacion;
