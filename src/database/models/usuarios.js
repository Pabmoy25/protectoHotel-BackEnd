import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({

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

    minLength: 10,
    maxLength: 40,
  },

  password: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 100,
    validate: {
      validator: (value) => {
        const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        return pattern.test(value);
      },
    },
    unique: true,
  },
  
  nombreCompleto: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },

  roleAdmin: {
    type: Boolean,
    //default: false
    //default: this.email==='admin@hakuhuasi.com.ar',
    
  },

  /*roleAdmin: {
    type: Boolean,
    //default: false
  },*/
});

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
