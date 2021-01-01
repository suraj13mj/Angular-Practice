import { Component, OnInit } from '@angular/core';

@Component({

  // selector: 'app-first',     //Element Selector
  // selector: '[app-first]',   //Attribute Selector 
  selector: '.app-first',       //Class Selector
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}



/*NOTES:

  Component Selectors in Angular work similar to those of CSS selectors.

  1. Element Selector Syntax:   <app-first></app-first>  
  2. Attribute Selector Syntax: <div app-first></div>
  3. Class Selector Syntax:     <div class="app-first"></div>

  4. We cannot use ID selector syntax (selector: '#app-first') for selecting components in Angular.
    <div id="app-first"></div>

*/