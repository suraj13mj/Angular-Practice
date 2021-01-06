import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
    // public name: string;
    // public description: string;
    // public imagePath: string;

    constructor(public name?: string, public description?: string, public imagePath?: string, public ingredients?: Ingredient[]) { 
    }
}


/*
    1. Here we have created the model (blueprint) i.e structure of the Recipes object to be used in the Project
*/
