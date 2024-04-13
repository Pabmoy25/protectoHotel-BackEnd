import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    email: {
      type: String,
      require: true,
      validate: {
          validator: (value)=>{
              const pattern = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
              return pattern.test(value)
          }
      }
    },
    password: {
      type: String,
      require: true
    },
    role: {
      type: String,
      require: true,
    },
    nombreUsuario: {
      type: String,
      required: true,
      unique: true,
      minLength: 4,
      maxLength: 15
    },
  });
  
   const Usuario = mongoose.model('usuario', usuarioSchema);