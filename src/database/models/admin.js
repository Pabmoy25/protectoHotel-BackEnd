import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
  {
    nombreCompleto: {
      type: String,
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 50,
    },

    email: {
      type: String,
      default: "admin@hakuhuasi.com.ar",
      require: true,
      unique: true,
      
      validate: {
        validator: function (value) {
          return value.includes("admin@hakuhuasi.com.ar");
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
          const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{3,8}$/;
          return pattern.test(value);
        },
      },
    },

    roleAdmin: {
      type: Boolean,
      default: true
    },
  },

  {
    virtuals: {
      rol:{
      rolAdmin: {
        get(){ 
          return this.email.includes("admin@hakuhuasi.com.ar");
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

const Admin = mongoose.model("admin", adminSchema);

export default Admin;
