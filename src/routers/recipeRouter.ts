import express, { Request, Response } from "express";
import RecipeController from "../controllers/recipeController";

const router = express.Router();

router.post("/", RecipeController.create);

router.get("/",  RecipeController.getAll);

router.get("/:id",  RecipeController.findById);

export default router;
