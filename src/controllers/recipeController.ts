import { NextFunction, Request, Response } from "express";
import RecipeService from "../services/recipeService";

class RecipeController {
  static async create(req: Request, res: Response, next: NextFunction) {
    try {
      const {
        name,
        ingredients,
        instructions,
        imageUrl,
        cookingTime,
        createdBy,
      } = req.body;

      const recipe = await RecipeService.create({
        name,
        ingredients,
        instructions,
        imageUrl,
        cookingTime,
        createdBy,
      });

      res.status(201).json({
        message: "Recipe created successfully",
        data: recipe,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const recipes = await RecipeService.getAll();
      res.status(200).json({
        message: "get all recipes",
        data: recipes,
      });
    } catch (error) {
      next(error);
    }
  }

  static async findById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;

      const recipe = await RecipeService.findById(id);
      res.status(200).json({
        message: "get recipes by id",
        data: recipe,
      });
    } catch (error) {
      next(error);
    }
  }
}

export default RecipeController;
