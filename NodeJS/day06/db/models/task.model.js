import { Schema, model } from "mongoose";

// Define the task schema
const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    status: {
      type: String,
      enum: ["toDo", "doing", "done"],
      default: "toDo", // Default status is "toDo"
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
      required: true,
    },
    assignTo: {
      type: Schema.Types.ObjectId,
      ref: "User", // Reference to the User model
    },
    deadline: Date,
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

// Create the taskModel
const taskModel = model("Task", taskSchema);

export default taskModel;
