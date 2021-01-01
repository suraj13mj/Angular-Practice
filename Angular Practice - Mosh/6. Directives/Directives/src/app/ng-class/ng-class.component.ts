import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent {
  liked = true;
  button_value = "Liked";

  onClick(){
    if(this.button_value == "Liked"){
      this.button_value = "Not-Liked";
      this.liked = false;
    }
    else{
      this.button_value = "Liked";
      this.liked = true;
    } 
  }
}
