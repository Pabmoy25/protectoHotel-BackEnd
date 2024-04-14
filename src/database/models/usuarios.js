import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
  /*numHabitacion: {
        type: String,
        minLengh: 2,
        MaxLength: 10,
        unique: true,
        require: true,
    },*/

  email: {
    type: String,
    require: true,
    unique: true,
    validate: {
      validator: (value) => {
        const pattern =
          /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        return pattern.test(value);
      },
    },
  },
  password: {
    type: String,
    require: true,
    minLength: 15,
    maxLength: 30,
  },
  role: {
    type: String,
    require: true,
  },
  nombreCompleto: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 15,
  },
});

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
