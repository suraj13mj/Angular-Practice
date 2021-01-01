import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent {

  Courses = [
    { id: 1, name: "Angular" },
    { id: 2, name: "React" },
    { id: 3, name: "NodeJS" }
  ]
}
