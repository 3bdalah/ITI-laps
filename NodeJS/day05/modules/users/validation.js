import { body, validationResult } from "express-validator";
const signUpValidator = [
  body("username").matches(/^[a-zA-Z][a-zA-Z0-9_-]{3,15}$/),
  body("email").isEmail(),
  body("password").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/),
];

export default signUpValidator;
