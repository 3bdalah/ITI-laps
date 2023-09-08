const signUp = async (req, res) => {
  const { userName, email, password } = req.body;
  res.json({ message: "Done", data: { userName, email, password } });
};

export default signUp;
