import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-case',
  templateUrl: './ng-switch-case.component.html',
  styleUrls: ['./ng-switch-case.component.css']
})
export class NgSwitchCaseComponent {
  currentTab = 'map';

  //currentTab = 'etc';    //enables *ngSwitchDefault case if none of values match
}
