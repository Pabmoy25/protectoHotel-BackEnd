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
         
        return pattern.test(value);
      },
    },

    minLength: 13,
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
    validate: {
      validator: (value) => {
        const pattern = /^[a-zA-Z\s]+$/;
        return pattern.test(value);
      },
    },
  },

  roleAdmin: {
    type: Boolean,
    default: false
  },

},
{
  virtuals: {
    rol:{
    rolAdmin: {
      get(){ 
        return this.rolAdmin;
      },
      set(v) {
        this.rolAdmin=v.email.includes("admin@hakuhuasi.com.ar");
      
      },
    },
  },
}
},

{
  toJSON: { virtuals: true },
}
);

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
