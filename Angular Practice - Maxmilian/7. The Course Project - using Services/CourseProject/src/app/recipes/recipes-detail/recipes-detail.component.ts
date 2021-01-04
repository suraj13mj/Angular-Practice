import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipeInfo: Recipe;

  constructor(private recipeServ: RecipesService) {
    this.recipeServ.dispRecipe.subscribe(
      (recipeInfo: Recipe) => this.recipeInfo = recipeInfo
    );
   }

  ngOnInit() { 
  }

}
