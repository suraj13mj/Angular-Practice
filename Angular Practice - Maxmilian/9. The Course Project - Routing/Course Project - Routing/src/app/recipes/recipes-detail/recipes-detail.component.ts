import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  recipeInfo: Recipe;
  id: number;

  constructor(private recipeServ: RecipesService,
    private route: ActivatedRoute) { }
  
  ngOnInit() { 
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipeInfo = this.recipeServ.getRecipe(this.id);
        }
      )
  }

  onAddtoSList() {
    this.recipeServ.addIngredientstoShoppingList(this.recipeInfo.ingredients)
  }

}
