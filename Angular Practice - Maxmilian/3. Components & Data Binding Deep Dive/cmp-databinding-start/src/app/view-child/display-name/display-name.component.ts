import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-name',
  templateUrl: './display-name.component.html',
  styleUrls: ['./display-name.component.css']
})
export class DisplayNameComponent {
  @Input() dispname: string = "";
}
