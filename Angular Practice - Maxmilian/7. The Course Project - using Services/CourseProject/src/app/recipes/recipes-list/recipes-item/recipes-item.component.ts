import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent {
  @Input() itemRecipe: Recipe = {};

  constructor(private recipeServ: RecipesService) { }

  onRecipeClick() {
    this.recipeServ.dispRecipe.emit(this.itemRecipe);
  }
}
