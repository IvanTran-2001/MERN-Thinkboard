import mongoose from "mongoose";

// 1-create schema
// 2- model base of that scehma

// schema
const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },
    
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

// model
const User = mongoose.model("User", userSchema);

export default User;
