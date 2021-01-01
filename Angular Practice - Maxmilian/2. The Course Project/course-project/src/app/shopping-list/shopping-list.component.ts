import { Component } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredientList: Ingredient[] = [
    new Ingredient('Tomaten', 10),
    new Ingredient('Kartoffeln', 5),
    new Ingredient('Erdbeeren', 20)
  ]
}
