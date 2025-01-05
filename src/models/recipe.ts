import mongoose, { mongo, Mongoose } from "mongoose";

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Please provide recipe name"],
  },
  ingredients: {
    type: String,
    require: [true, "Please provide recipe ingredients"],
  },
  instructions: {
    type: String,
    require: [true, "Please provide recipe instructions"],
  },
  imageUrl: {
    type: String,
    require: [true, "Please provide recipe imageUrl"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  cookingTime: {
    type: Number,
    required: [true, "Please provide cooking time (mn)"],
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide the creator of the recipe"],
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
