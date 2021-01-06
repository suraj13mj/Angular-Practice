import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredientList: Ingredient[];

  constructor(private shoplistServ: ShoppingListService) { }
  
  ngOnInit() {
    this.ingredientList = this.shoplistServ.getIngredients();
    this.shoplistServ.updatedIngredientList.subscribe(
      (updatedIngredientList: Ingredient[]) => {
        this.ingredientList = updatedIngredientList;
      }
    )
  }
}


