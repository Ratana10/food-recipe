import Recipe from "../models/recipe";
import { IRecipe } from "../types";
class RecipeService {
  static async create(data: IRecipe) {
    const recipe = new Recipe({
      name: data.name,
      ingredients: data.ingredients,
      instructions: data.instructions,
      imageUrl: data.imageUrl,
      cookingTime: data.cookingTime,
      createdBy: data.createdBy,
    });

    await recipe.save();

    return recipe;
  }

  static async getAll() {
    const recipes = Recipe.find();
    return recipes;
  }

  static async findById(id: string) {
    const recipe = Recipe.findById(id);
    return recipe;
  }
}

export default RecipeService;
