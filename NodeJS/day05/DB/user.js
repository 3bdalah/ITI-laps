import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: String,
    email: String,
    password: String,
    imageUrl: String,
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", userSchema);

export default userModel;
