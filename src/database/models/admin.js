import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    
    nombreCompleto: {
        type: String,
        required: true,
        unique: true,
        minLength: 3,
        maxLength: 50,
      },

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
    minLength: 15,
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
  },

  roleAdmin: {
    type: Boolean,
    default: true
  },
});

const Admin = mongoose.model("admin", adminSchema);

export default Usuario;
