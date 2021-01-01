import { MyService } from './../my-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  tournament = "Indian Premier League";

  teams = ["RCB", "CSK", "MI", "KKR", "KXIP", "RR", "DC", "SRH"];

  //Using Services to fetch Players
  players;

  //Method 1
  /* constructor(){
    let service = new MyService();
    this.players = service.getRCBPlayers();
  } */

  //Method 2
  constructor(service : MyService){
    this.players = service.getRCBPlayers();
  }

}






/*
1. In most cases the data (Ex: teams list) comes from an HTTP end point (Ex: APIs)
2. Thus we usually have to write a logic for fetching that data from the endpoint.

3. We have 2 choices - We can write that logic here in the component or - Write it in a separate class
  - The problems of writing the logic in component is that 
    1. It tightly couples the component with that HTTP end point (causing problems for unit testing).
    2. If the same logic is need somewhere else then we have rewrite the same logic once again.
    3. Component structure states it must house only ( data + view + only presentation logic), not other business logic

4. Thus we have Services in Angular
*/

/* Services

1. We have 2 methods for creating instance of Service
  - Method 1  
    - Here since we are using 'new' to create instance of Service, it tightly couples the instance of service to the component.
    - If constructor parameters of service change, then it needs to be changed in all the places where service is used.

  - Method 2 (Best)
    - Here we ask Angular to create an instance of service and then inject it to the constructor 

2. Next we need to register this service in app.module.ts in the providers section.

3. Angular creates a single instance of the Services registered in providers section, and injects the same instance to all components that use it.
  - This is called Singleton Pattern
  - The Injecting of Service to the Components by Angular is called Dependency Injection.

*/
