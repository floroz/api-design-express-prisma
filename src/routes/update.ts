import { Router } from "express";
import { handleInputErrors } from "../modules/middleware";
import { updateModelValidatorSchema } from "../validators/update";

const router = Router();

router.get("/", (req, res) => {});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put(
  "/:id",
  updateModelValidatorSchema,
  handleInputErrors,
  (req, res) => {
    res.json({ message: "all good" });
  }
);

router.delete("/:id", (req, res) => {});

export { router as updateRouter };
