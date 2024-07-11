import mongoose from "mongoose";
import { type } from "os";

//let make a schema

//in this we try to learn and understand about the schema
//type which type like number string

//using the unique

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//now we have to create the models--->

const User = mongoose.model("User", userSchema);

export default User;