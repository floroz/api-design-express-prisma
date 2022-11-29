import { UPDATE_STATUS } from "@prisma/client";
import { checkSchema } from "express-validator";

export const updateModelValidatorSchema = checkSchema({
  title: {
    isString: true,
    isLength: {
      options: {
        min: 3,
        max: 150,
      },
    },
    in: ["body"],
  },
  body: {
    isString: true,
    isLength: {
      options: {
        min: 3,
        max: 150,
      },
    },
    in: ["body"],
  },
  status: {
    custom: {
      options: (value) => {
        if (!Object.values(UPDATE_STATUS).includes(value)) {
          throw new Error("not matching custom validator");
        }
        return true;
      },
    },
  },
});
