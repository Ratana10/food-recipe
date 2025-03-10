import NotFound from "../config/notFound";
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
    const recipe = await Recipe.findById(id);
    if (!recipe) {
      throw new NotFound("Receipt not found");
    }
    return recipe;
  }

  static async update(data: IRecipe, id: string) {
    await this.findById(id);

    const recipe = Recipe.findByIdAndUpdate(id, data, {
      new: true,
    });

    return recipe;
  }
}

export default RecipeService;
