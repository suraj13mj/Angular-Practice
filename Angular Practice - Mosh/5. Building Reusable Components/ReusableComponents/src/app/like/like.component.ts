import { Component } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  
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
