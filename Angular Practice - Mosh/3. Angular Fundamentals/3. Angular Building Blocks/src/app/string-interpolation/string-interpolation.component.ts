import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent {

  team : string = "Royal Challengers Bangalore";
  
  getCaptain(){
    return "Virat Kohli";
  }

  NoOfWins: number = 65;
}


/*
- The data and method can be accessed from the view i.e in string-interpolation.component.html using {{ }}
- This syntax is called as String Interpolation syntax
- It allows view to access data defined in the component
*/