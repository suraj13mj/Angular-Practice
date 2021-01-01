import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styles: [`
      .foreColor{
        color : white;
      }
  `]
})
export class AssignmentComponent {
  para: boolean = false;
  clickLogs = [];

  onToggle() {
    this.para = !this.para;

    this.clickLogs.push(this.para);
  }
}
