import userModel from "../../db/models/user.model.js";
import bcrypt from "bcrypt";

const getallusers = async (req, res) => {
  let listUsers = await userModel.find();
  res.json({ message: "all users here", listUsers });
};

const signUp = async (req, res) => {
  try {
    let { email } = req.body;
    console.log("req body", req.body);
    let foundedUser = await userModel.findOne({ email: email });
    foundedUser && res.json({ message: "already signed user " });
    if (!foundedUser) {
      let hashPassword = bcrypt.hashSync(req.body.password, 7);
      let addUser = await userModel.insertMany({
        ...req.body,
        password: hashPassword,
      });
      let allUSers = await userModel.find();
      res.json({ message: "Added successfully ", allUSers });
    }
  } catch (error) {
    res.json({ message: "error", error });
  }
  //   res.json({ message: "hello" });
};

// create signin users
const signIn = async (req, res) => {
  try {
    let foundedUser = await userModel.findOne({ email: req.body.email });
    if (foundedUser) {
      let matched = bcrypt.compareSync(req.body.password, foundedUser.password);
      if (matched) {
        res.status(200).json({ message: "Welcome Again" });
      } else {
        res.status(400).json({ messaga: "User passwrod Uncorrect" });
      }
    } else {
      res
        .status(404)
        .json({ message: "user not found , u have  to register first" });
    }
  } catch (error) {
    res.json({ message: "error from sign in ", error });
  }
};

export { signUp, getallusers, signIn };
