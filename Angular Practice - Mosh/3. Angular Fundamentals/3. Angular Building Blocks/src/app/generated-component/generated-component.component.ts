import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'generated-component',
  templateUrl: './generated-component.component.html',
  styleUrls: ['./generated-component.component.css']
})
export class GeneratedComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}


/*
- Instead of manualing creating Components, we can easliy do it using Angular CLI
- We use command : ng g c ComponentName   (g - generate, c - component)
- Here angular creates the component and also registers it in app.module.ts
*/


/*
- All the templates in the application are bundled together and then transmitted i.e in main.bundle.js or main.js
- We can observe this in the Network tab of Developer Tools
*/