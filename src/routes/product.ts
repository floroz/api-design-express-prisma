import { Router } from "express";
import { body } from "express-validator";
import { productHandler } from "../handlers/product";
import { handleInputErrors } from "../modules/middleware";

const router = Router();

/**
 * Product
 */
router.get("/", productHandler.findAll);

router.get("/:id", productHandler.findById);

router.post(
  "/",
  [body("name").isString().isLength({ max: 150, min: 1 }), handleInputErrors],
  productHandler.create
);

router.put(
  "/:id",
  [body("name").isString().isLength({ max: 150, min: 1 }), handleInputErrors],
  productHandler.update
);

router.delete("/:id", productHandler.delete);

export { router as productRouter };
