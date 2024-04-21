import mongoose, { Schema } from "mongoose";

const habitacionSchema = new Schema({
  habitacion: {
    type: String,
    required: true,
    minLengh: 2,
    MaxLength: 5,
    unique: true,
  },
  tipoDeHabitacion: {
    type: String,
    required: true,
    enum: ["Estándar", "Doble", "Deluxe", "Suite"],
  },
  precio: {
    type: Number,
    required: true,
    min: 10000,
    Max: 100000,
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
    minLengh: 20,
    MaxLength: 100,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLengh: 50,
    MaxLength: 900,
  },
  fechaEntrada: {
    type: Date,   
  },
  fechaSalida: {
    type: Date,
  },
  estado: {
    type: String,
    required: true,
    enum: ["Disponible", "No disponible"],
    default: "Disponible",
  },
});

const Habitacion = mongoose.model("habitacion", habitacionSchema);

export default Habitacion;
