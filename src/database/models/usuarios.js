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
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
         // /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
        return pattern.test(value);
      },
    },
    minLength: 15,
    maxLength: 40,
  },
  password: {
    type: String,
    require: true,
    minLength: 6,
    maxLength: 100,
    validate: {
      validator: (value) => {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return pattern.test(value);
      },
    },
  },
  /*role: {
    type: String,
    require: true,
    minLength: 7,
    maxLength: 13,
  },
  nombreCompleto: {
    type: String,
    required: true,
    unique: true,
    minLength: 4,
    maxLength: 15,
  },*/
});

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
