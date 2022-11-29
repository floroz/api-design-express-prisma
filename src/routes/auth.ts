import { Router } from "express";
import { createNewUser, signin } from "../handlers/user";

const router = Router();

router.post("/signup", createNewUser);
router.post("/signin", signin);

export { router as authRouter };
