import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @ViewChild('ingredientName') ingreName: ElementRef;
  @ViewChild('ingredientQty') ingreQty: ElementRef;

  constructor(private shoplistServ: ShoppingListService) { }


  onAdd() {
    const name = this.ingreName.nativeElement.value;
    const qty = this.ingreQty.nativeElement.value;
    this.shoplistServ.addIngredient(new Ingredient(name, qty));
  }
}
