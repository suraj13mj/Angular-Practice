import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model'
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit{
  recipeList: Recipe[];

  constructor(private recipeServ: RecipesService) { }
  
  ngOnInit() {
    this.recipeList = this.recipeServ.getRecipe()
  }

}
