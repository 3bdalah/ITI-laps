import { Schema, model } from "mongoose";

// Define the user schema
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
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
    age: {
      type: Number,
      min: 18, // Assuming users must be at least 18 years old
    },
    gender: {
      type: String,
      enum: ["Male", "Female", "Other"], // You can customize the gender options
    },
    phone: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false, // Assuming users are not verified by default
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the userModel
const userModel = model("User", userSchema);

export default userModel;
