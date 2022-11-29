import { Router } from "express";
import { body } from "express-validator";
import { handleInputErrors } from "./modules/middleware";
import { updateValidatorSchema } from "./validators/update.validator";

const router = Router();
/**
 * Product
 */
router.get("/product", (req, res) => {
  res.json({ message: "product" });
});

// router.get("/product/:id", (req, res) => {});

// router.post("/product", (req, res) => {});

router.put(
  "/product/:id",
  [body("name").isString().isLength({ max: 150, min: 1 }), handleInputErrors],
  (req, res) => {
    res.json({});
  }
);

// router.delete("/product/:id", (req, res) => {});

/**
 * Update
 */

// router.get("/update", (req, res) => {});

// router.get("/update/:id", (req, res) => {});

// router.post("/update", (req, res) => {});

router.put(
  "/update/:id",
  updateValidatorSchema,
  handleInputErrors,
  (req, res) => {
    res.json({ message: "all good" });
  }
);

// router.delete("/update/:id", (req, res) => {});

/**
 * UpdatePoint
 */

// router.get("/updatepoint", (req, res) => {});

// router.get("/updatepoint/:id", (req, res) => {});

// router.post("/updatepoint", (req, res) => {});

// router.put("/updatepoint/:id", (req, res) => {});

// router.delete("/updatepoint/:id", (req, res) => {});

export { router };
