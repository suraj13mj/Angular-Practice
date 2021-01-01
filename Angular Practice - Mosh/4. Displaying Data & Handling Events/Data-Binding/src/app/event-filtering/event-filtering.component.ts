import { Component } from '@angular/core';

@Component({
  selector: 'app-event-filtering',
  templateUrl: './event-filtering.component.html',
  styleUrls: ['./event-filtering.component.css']
})
export class EventFilteringComponent {

  onKeyUp($event){
    if($event.keyCode === 13)         //13 stands for Enter
      document.getElementById("txt").innerText = $event.target.value;   //Provides the value entered in the input field
  }

  

  onKeyUp1($event){
    document.getElementById('txt1').innerText = $event.target.value;
  }
}
