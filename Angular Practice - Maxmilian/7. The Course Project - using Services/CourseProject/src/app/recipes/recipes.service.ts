import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipesService {
    private recipeList: Recipe[] = [
    new Recipe('Italien Pizza', 'The Italien Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe('Chinese Pizza', 'The Chinese Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe(' Deutsch Pizza', 'The Deutsch Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe('Frankreich Pizza', 'The Frankreich Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe('Russland Pizza','The Russland Margaretta Pizza','https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg')
    ]

    /*
    1. Arrays are reference types, thus if we return this.recipeList, then the reference of the array object is passed.
    2. It can then be modified from other places, thus no use of private access specifier
    3. Thus we need to return this.recipeList.slice(), here a reference of the copy of array object is passed.
    */
    getRecipe() {
        return this.recipeList.slice();
    }
    
    dispRecipe = new EventEmitter<Recipe>();

}