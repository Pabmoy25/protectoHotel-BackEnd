import mongoose, { Schema } from "mongoose";

const habitacionSchema = new Schema({
  habitacion: {
    type: String,
    required: true,
    minLength: 2,
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
    minLength: 20,
    MaxLength: 100,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLength: 50,
    MaxLength: 900,
  },
});

const Habitacion = mongoose.model("habitacion", habitacionSchema);

export default Habitacion;
