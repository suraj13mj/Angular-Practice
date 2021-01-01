import { Component } from '@angular/core';

import {Recipe} from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent  {
  recipeList: Recipe[] = [
    new Recipe('Pizza', 'The Italien Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe('Pizza', 'The Italien Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe('Pizza', 'The Italien Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe('Pizza', 'The Italien Margaretta Pizza', 'https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg'),
    new Recipe('Pizza','The Italien Margaretta Pizza','https://cdn.pixabay.com/photo/2020/05/17/04/22/pizza-5179939_1280.jpg')
  ]
}
