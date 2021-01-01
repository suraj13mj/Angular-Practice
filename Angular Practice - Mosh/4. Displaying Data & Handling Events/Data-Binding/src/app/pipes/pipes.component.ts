import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  Courses = {
    Title : "The Complete Angular 9 Course",
    Students : 43567,
    Rating : 4.5678,
    Price : 45000.60,
    Release_Date : new Date(2016, 11, 24)      //0 - January ...... 11 -December
  }
}
