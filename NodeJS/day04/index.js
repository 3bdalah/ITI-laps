import express from "express";
import { connection } from "./db/connection.js";
import userRouter from "./modules/user/user.routes.js";
import messageRoutes from "./modules/messages/message.routes.js";

const app = express();
const port = 4000;

connection();

app.use(express.json());

app.use(userRouter);
app.use(messageRoutes);

app.get("/", (req, res) => res.send("hello"));

app.listen(port, (req, res) => {
  console.log(`Example app listening  on  port ${port}`);
});
