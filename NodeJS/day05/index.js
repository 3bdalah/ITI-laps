import express from "express";
import connectDB from "./DB/config.js";
import userRouter from "./modules/users/user.routes.js";
const app = express();
const port = 4000;

app.use(express.json());
app.use(userRouter);

connectDB();
app.listen(port, () => {
  console.log({ message: "done up server " });
});
