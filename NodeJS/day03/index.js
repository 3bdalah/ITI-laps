import userRouter from "./modules/users/user.routes.js";
import { initConnection } from "./db/connection.js";
import express from "express";
const app = express();
const port = 5000;
app.use(express.json());

initConnection();

app.use(userRouter);
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
