import userModel from "../../db/modal/user.model.js";

const signIn = async (req, res) => {
  const { userName, password } = req.body;
  const users = await userModel.findOne({ userName, password });
  //   const isSignedUsers = users.find(
  //     (user) => user.userName === username && user.password == password
  //   );
  if (!users) {
    res.json({ message: "got to sign up first :( " });
  } else {
    res.json({ message: "Welcome ya Zaghlol" });
  }
};

const signUp = async (req, res) => {
  //   let { userName, password, email } = req.body;
  const newUser = await userModel.insertMany(req.body);
  const usersLoged = await userModel.find();
  res.json({ message: "signedUp", usersLoged });
};

const getallUsers = async (req, res) => {
  let users = await userModel.find();
  res.json({ message: "display all users", users });
};

const updateUsers = async (req, res) => {
  let { id } = req.params;
  let updateUser = await userModel.findByIdAndUpdate(id, {
    userName: req.body.userName,
  });
  let users = await userModel.find();
  res.json({ message: "Updated user", users });
};

const addUser = async (req, res) => {
  let addNewUser = await userModel.insertMany(req.body);
  res.json({ message: "done added new user", addNewUser });
};

const deleteUserById = async (req, res) => {
  let { id } = req.params;
  const deletedUser = await userModel.findByIdAndDelete(id);
  let allUsersAfterDelete = await userModel.find();
  res.json({ message: "Deleted", allUsersAfterDelete });
};
export { getallUsers, updateUsers, addUser, deleteUserById, signIn, signUp };
