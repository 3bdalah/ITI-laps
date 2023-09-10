import express from "express";
import connectionApp from "./db/connection.js";
import userRouter from "./modules/user/user.routes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use(userRouter);
connectionApp();
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
