import mongoose from "mongoose";

const connectDB = async () => {
  return await mongoose
    .connect("mongodb://localhost:27017/sara7a")
    .then((res) => {
      console.log("Connected DB", res);
    })
    .catch((err) => {
      console.log("failto connect  DB ", err);
    });
};

export default connectDB;
