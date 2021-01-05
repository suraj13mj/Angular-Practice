import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipesService]
})
export class RecipesComponent {
  recipeInfo: Recipe;

  constructor(private recipeServ: RecipesService) {
    this.recipeServ.dispRecipe.subscribe(
      (recipeInfo: Recipe) => this.recipeInfo = recipeInfo
    );
   }
}
