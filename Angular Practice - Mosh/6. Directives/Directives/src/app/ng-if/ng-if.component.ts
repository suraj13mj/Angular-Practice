import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  courses = [1, 2];

  areCoursesAvailable() {
    if (this.courses.length > 0) return true;
    else return false;
  }

}
