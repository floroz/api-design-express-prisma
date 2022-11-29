import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "../modules/middleware";

const router = Router();

/**
 * Product
 */
router.get("/", (req, res) => {
  res.json({ message: "product" });
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {});

router.put(
  "/:id",
  [body("name").isString().isLength({ max: 150, min: 1 }), handleInputErrors],
  (req, res) => {
    res.json({});
  }
);

router.delete("/product/:id", (req, res) => {});

export { router as productRouter };
