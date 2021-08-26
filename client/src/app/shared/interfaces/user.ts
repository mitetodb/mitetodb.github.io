import { IRecipe } from "./recipe";

export interface IUser {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    imageUrl: string,
    recipes: IRecipe[]
}