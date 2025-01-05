import express from "express";
import RecipeController from "../controllers/recipeController";
import authenticate from "../middlewares/authenticate";

const router = express.Router();

router.use(authenticate);

router.post("/", RecipeController.create);

router.get("/", RecipeController.getAll);

router.get("/:id", RecipeController.findById);

router.put("/:id", RecipeController.update);

export default router;
