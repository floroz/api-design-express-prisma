import { Router } from "express";
import { protect } from "./modules/auth";
import { authRouter } from "./routes/auth";
import { productRouter } from "./routes/product";
import { updateRouter } from "./routes/update";

const router = Router();

router.use("/auth", authRouter);
router.use("/product", [protect], productRouter);
router.use("/update", [protect], updateRouter);
router.use("/updatepoint", [protect], updateRouter);

export { router };
