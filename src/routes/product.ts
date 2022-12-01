import { Router } from "express";
import { productHandler } from "../handlers/product";
import { productValidators } from "../validators/product";

const router = Router();

/**
 * Product
 */
router.get("/", productHandler.findAll);

router.get("/:id", productHandler.findById);

router.post("/", [...productValidators.create], productHandler.create);

router.put("/:id", [...productValidators.update], productHandler.update);

router.delete("/:id", productHandler.delete);

export { router as productRouter };
