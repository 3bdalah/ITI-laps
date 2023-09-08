import { body, validationResult } from "express-validator";

const handleValidation = () => {
  return (req, res, next) => {
    const err = validationResult(req);
    if (err.isEmpty()) {
      next();
    } else {
      res.json({ message: "validation error ", errMessage: err.array() });
    }
  };
};

export default handleValidation;
