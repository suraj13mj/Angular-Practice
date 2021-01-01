import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  logoURL = "assets/rcb.jpg";
  onClick(){
    if(this.logoURL == "assets/rcb.jpg")
      this.logoURL = "assets/srh.jpg";
    else
      this.logoURL = "assets/rcb.jpg"
  }


  post = {
    like_status : true,
    like_value : "Liked"
  }

  post1 = {
    like_status : false,
    like_value : "Not-Liked"
  }

  post2 = {
    like_status : true,
    like_value : "Liked"
  }

  onLikeClicked(){                                    
    alert("You Toggled the Like Button");
  }
}
