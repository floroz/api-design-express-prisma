import { UPDATE_STATUS } from "@prisma/client";
import { checkSchema } from "express-validator";

export const updateModelValidatorSchema = checkSchema({
  title: {
    isString: true,
    exists: true,
    in: ["body"],
  },
  body: {
    isString: true,
    exists: true,
    in: ["body"],
  },
  status: {
    optional: true,
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
