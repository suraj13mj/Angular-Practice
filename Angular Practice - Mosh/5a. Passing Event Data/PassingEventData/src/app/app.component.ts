import { Component } from '@angular/core';

import { LikeReturnType } from './passing-event-data/passing-event-data.component'

// interface LikeReturnType {                 //Instead of declaring here, we can declare it in PassingEventData Component and export it
//   LikeValue : boolean                      // and then import it here
// }


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PassingEventData';

  post = {
    like_status : true,
    like_value : "Liked"
  }

  post1 = {
    like_status : false,
    like_value : "Not-Liked"
  }

  onLikeClicked(bool_like : boolean){
    alert("You toggled the like button :"+ bool_like);
    console.log("Like Value :", bool_like);
  }

  // onLikeClicked(eventData) {
  //   console.log(eventData)
  // }



  onLikeClicked1(obj : {LikeValue : boolean}){            //We can also declare an interface Ex: LikeReturnType
    alert("You toggled the like button");
    console.log("Raised Event Object :", obj);
  }

  // onLikeClicked1(obj : LikeReturnType){             
  //   alert("You toggled the like button");
  //   console.log("Raised Event Object :", obj);
  // }



  panel = {
    Heading : "Royal Challengers Bangalore",
    Body : "Description of RCB"
  }
}
