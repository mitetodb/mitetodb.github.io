import { Category } from "../enums/category";
import { Glass } from "../enums/glas";

export interface IRecipe {
    id: string,
    name: string,
    imageUrl: string,
    author: string,
    ingredients: string[],
    method: string,
    glass: Glass,
    garnish: string,
    category: Category
}