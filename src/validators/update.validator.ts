import { UPDATE_STATUS } from "@prisma/client";
import { checkSchema } from "express-validator";

export const updateValidatorSchema = checkSchema({
  title: {
    isString: true,
    in: ["body"],
    errorMessage: "Missing Title",
  },
  body: {
    isString: true,
    in: ["body"],
    errorMessage: "Missing Title",
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
