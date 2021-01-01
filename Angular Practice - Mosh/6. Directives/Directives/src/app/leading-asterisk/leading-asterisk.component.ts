import { Component } from '@angular/core';

@Component({
  selector: 'app-leading-asterisk',
  templateUrl: './leading-asterisk.component.html',
  styleUrls: ['./leading-asterisk.component.css']
})
export class LeadingAsteriskComponent {

  fruits = [
    { id: 1, name: "Mango" },
    { id: 2, name: "Banana" },
    { id: 3, name: "Orange" }
  ]
}
