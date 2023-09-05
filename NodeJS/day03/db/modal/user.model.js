import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    userName: String,
    password: {
      type: String,
      require: true,
    },
    age: Number,
    email: {
      type: String,
      require: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", userSchema);

export default userModel;
