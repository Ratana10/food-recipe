import express from "express";
import UserController from "../controllers/userController";
import authenticate from "../middlewares/authenticate";

const router = express.Router();

router.use(authenticate);

router.post("/", UserController.create);

router.get("/", UserController.findAll);

router.get("/:id", UserController.findById);

export default router;
