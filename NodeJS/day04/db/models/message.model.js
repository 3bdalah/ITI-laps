import mongoose from "mongoose";
import { Schema } from "mongoose";
const messageSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  messageContent: {
    type: String,
    required: true,
  },
  receivedId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
});

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;
