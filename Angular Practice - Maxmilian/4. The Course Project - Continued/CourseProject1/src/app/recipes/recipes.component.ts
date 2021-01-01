import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  recipeData: Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  onRecipePassed(recipeData: Recipe) {
    this.recipeData = recipeData;
  }

}
