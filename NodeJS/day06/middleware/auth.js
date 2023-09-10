import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token) {
      return res.status(401).json({ message: "Please provide a token." });
    }

    const decoded = jwt.verify(token, "userToken");

    if (decoded) {
      next();
    } else {
      res.status(401).json({ message: "Invalid token." });
    }
  } catch (error) {
    console.error("Error in auth middleware:", error);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default auth;
