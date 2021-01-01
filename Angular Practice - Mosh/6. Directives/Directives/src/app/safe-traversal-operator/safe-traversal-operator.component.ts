import { Component } from '@angular/core';

@Component({
  selector: 'app-safe-traversal-operator',
  templateUrl: './safe-traversal-operator.component.html',
  styleUrls: ['./safe-traversal-operator.component.css']
})
export class SafeTraversalOperatorComponent {

  //Complex Objects
  task1 = {
    name: 'Suraj',
    //Object within an object
    job: {
      id: 1,
      category: 'Plumbing',
      amount: 100
    }
  }

  task2 = {
    name: 'Sandeep',
    job: null
  }
  
}


