import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";


@Injectable()
export class ShoppingListService {
    @Output() updatedIngredientList = new EventEmitter<Ingredient[]>();

    private ingredientList: Ingredient[] = [
    new Ingredient('Tomaten', 10),
    new Ingredient('Kartoffeln', 5),
    new Ingredient('Erdbeeren', 20)
    ]
    
    getIngredients() {
        return this.ingredientList.slice();
    }
    
    addIngredient(ingredient: Ingredient) {
        this.ingredientList.push(ingredient);
        this.updatedIngredientList.emit(this.ingredientList.slice());
    }

    addIngredients(ingredients: Ingredient[]) {
        /* Here, for each iteration, a updatedIngredientList is emitted
        for (let ingredient of ingredients) {
            this.ingredientList.push(ingredient);
        }
        */
        
        //Better Approach: Here we use spread operator, to add array of Ingredients received as argument to the IngredientList in one go using spread operator (...)
        //Then emit the updatedIngredientList once
        this.ingredientList.push(...ingredients);
        this.updatedIngredientList.emit(this.ingredientList.slice())
    }
}

/*
#NOTES

1. Here we return a slice of the Ingredient List through getIngredients() method.
2. i.e we are passing a copy of the Ingredient List to the ShoppingList Component.

3. When a new component is added to the Ingredient List, it gets added to the Original List here through this service.
4. But since, ShoppingList Component has the copy of old Ingredient List, the newly added Ingredient doesn't get updated in the View.

5. Inorder to solve this problem, we emit the copy updatedIngredientList, which is then subscribed by the ShoppingList Component.

*/