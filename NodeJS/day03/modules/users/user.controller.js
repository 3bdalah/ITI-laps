import userModel from "../../db/modal/user.model.js";
import bcrypt from "bcrypt";
// const bcrypt = require("bcrypt");
const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      res.json({ message: "Your Email Not Found : go to sign up Fierst :) " });
    }
    // check passsword found or not and corrected
    const passMatch = bcrypt.compare(password, user.password);
    if (passMatch) {
      res.json({ message: "Welcome Again Ya zaghlol" });
    } else {
      res.json({ message: "Invalid your password" });
    }
  } catch (error) {
    res.json({ message: "error sign in " });
  }
};

const signUp = async (req, res) => {
  try {
    let { userName, password, email } = req.body;
    // const newUser = await userModel.create(req.body);
    if (!userName || !password || !email) {
      res.json({
        message: "username  + password  +  email ->>>  requird ya bashaaa",
      });
    }

    const existUser = await userModel.findOne({ email });
    if (existUser) {
      return res.json({ message: "this email already used" });
    }
    const newComer = await userModel.create(req.body);
    const usersLoged = await userModel.find();
    res.json({ message: "signedUp", usersLoged });
  } catch (error) {
    res.json({ message: "error server when sign up " });
  }
};

const getallUsers = async (req, res) => {
  try {
    res.json({ message: "list users", users });
    let users = await userModel.find();
  } catch (error) {
    res.json({ message: "error server get all users" });
  }
};

const updateUsers = async (req, res) => {
  let { id } = req.params;
  try {
    let updateUser = await userModel.findByIdAndUpdate(id, {
      userName: req.body.userName,
    });
    if (!updateUser) {
      res.json({ message: "User Not Found" });
    } else {
      let users = await userModel.find();
      res.json({ message: "Updated users", users });
    }
  } catch (error) {
    res.json({ message: "error server when update users" });
  }
};

const addUser = async (req, res) => {
  try {
    let addNewUser = await userModel.create(req.body);
    res.json({ message: "done added new user", addNewUser });
  } catch (error) {
    res.json({ message: "Error Server  when add user" });
  }
};

const deleteUserById = async (req, res) => {
  let { id } = req.params;
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    let allUsersAfterDelete = await userModel.find();
    res.json({ message: "Deleted User Done", allUsersAfterDelete });
  } catch (error) {
    res.json({ message: "Error Server whene Deleted User" });
  }
};

// search for use where his age is between x and Y;
const getAllUsersBtwRange = async (req, res) => {
  try {
    const { minAge, maxAge } = req.body;
    const users = await userModel.find({ age: { $gte: minAge, $lte: maxAge } });

    res.json({
      message: "List of users within the specified age range",
      users,
    });
  } catch (error) {
    res.json({ message: "Error from get all users between " });
  }
};
export {
  getallUsers,
  updateUsers,
  addUser,
  deleteUserById,
  signIn,
  signUp,
  getAllUsersBtwRange,
};
