import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    userName: {
      type: String,
      minLength: [3, "min char is 3"],
      maxLength: [10, "max length is 10 "],
    },
    email: {
      type: String,
      requird: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: String,
  },
  {
    timestamps: true,
  }
);

const userModel = model("User", userSchema);
export default userModel;
