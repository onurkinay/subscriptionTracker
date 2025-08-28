import { Router } from "express";
import authRouter from "./auth.routes.js";
import subscriptionRouter from "./subscription.routes.js";
import userRouter from "./user.routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/subscriptions", subscriptionRouter);
router.use("/users", userRouter);

export default router;
