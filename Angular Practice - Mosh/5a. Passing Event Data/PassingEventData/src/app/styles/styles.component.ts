import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.css'],
  styles : [
    `
      .btnStyle {
        color : black;
        background-color : green;
      }
    `,
    `
    .btnStyle {
      color : white;
      background-color : yellow;
    }
    
    `
  ]
})
export class StylesComponent  {
}



/* 
Applying Styles

-> There are 3 methods for applying styles in Angular

  M1. Using styleUrls
     - Here we specify the path of the .css files in an array.
     - We can specify multiple styles in this array, from general to more specific styling.

  M2. Using styles property in @component decorator function
     - Here also we can specify multiple styles in the array using backtick

  M3. Using <style></style> in the component.html to specify internal styles.


-> Scopes of Styles (Overwriting of Styles)
  1. In Angular only between M1 and M2 only 1 style gets applied i.e whichever is mentioned last.
  2. If Internal styles i.e M3 is used, then it will always get applied.
*/
