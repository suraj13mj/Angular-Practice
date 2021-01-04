import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild('ingredientName') ingreName: ElementRef;
  @ViewChild('ingredientQty') ingreQty: ElementRef;


  onAdd() {
    const name = this.ingreName.nativeElement.value;
    const qty = this.ingreQty.nativeElement.value;
    const newIngre = new Ingredient(name, qty);
    this.newIngredient.emit(newIngre);
  }
}
