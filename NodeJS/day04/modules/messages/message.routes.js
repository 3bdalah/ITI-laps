import express from "express";
import { addMsg } from "./message.controller.js";
const messageRoutes = express.Router();

messageRoutes.post("/message/:id", addMsg);

export default messageRoutes;
