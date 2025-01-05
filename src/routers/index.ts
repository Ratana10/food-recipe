import express, { Request, Response } from "express";
import userRouter from "./userRouter";
import recipeRouter from "./recipeRouter";
import authRouter from "./authRouter";
import authenticate from "../middlewares/authenticate";

const router = express.Router();

router.use("/api/v1/users", userRouter);
router.use("/api/v1/recipes", recipeRouter);
router.use("/api/v1/auth", authRouter);

router.use("/api/v1/test", authenticate, (req: Request, res: Response) => {
  res.json({ message: "Test route accessed", user: "test" });
});

export default router;
