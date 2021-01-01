import { Component, EventEmitter, Output } from '@angular/core';
import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent  {
  @Output() toRecipeDetails = new EventEmitter<Recipe>();
  recipeList: Recipe[] = [
    new Recipe('Italien Pizza', 'The Italien Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe('Chinese Pizza', 'The Chinese Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe(' Deutsch Pizza', 'The Deutsch Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe('Frankreich Pizza', 'The Frankreich Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe('Russland Pizza','The Russland Margaretta Pizza','https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg')
  ]


  onRecipeClicked(recipe: Recipe) {
    this.toRecipeDetails.emit(recipe);
  }
}
