import { handleInputErrors } from "../modules/middleware";
import { body } from "express-validator";

export const productValidators = {
  create: [
    body("name").isString().isLength({ max: 150, min: 1 }),
    handleInputErrors,
  ],
  update: [
    body("name").isString().isLength({ max: 150, min: 1 }),
    handleInputErrors,
  ],
};
