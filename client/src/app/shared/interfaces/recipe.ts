import { Category } from "../enums/category";
import { Glass } from "../enums/glas";
import { Rating } from "../enums/rating";
import { IUser } from "./user";

export interface IRecipe {
    id: string,
    name: string,
    imageUrl: string,
    author: IUser,
    ingredients: string[],
    method: string,
    glass: Glass,
    garnish: string,
    category: Category[],
    rating: Rating
}