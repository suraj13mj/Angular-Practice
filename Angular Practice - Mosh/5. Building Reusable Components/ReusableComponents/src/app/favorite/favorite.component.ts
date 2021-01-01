import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';
import { Component } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
  icon_type = faStar;

  
  fav = true;
  button_value = "Favorite"

  onClick(){
    this.fav = !this.fav;
    if(this.button_value == "Favorite"){
      this.button_value = "Not-Favorite";
    }
    else
      this.button_value = "Favorite";
  }
}
