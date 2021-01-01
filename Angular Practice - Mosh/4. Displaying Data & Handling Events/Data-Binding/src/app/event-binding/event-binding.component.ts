import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {


  onClick(){
    document.getElementById("btnClickMe").innerText = "Click Me Button was clicked";
  }



  onClick1(event){
    document.getElementById("btnClickMe1").innerText = "Click Me Button 1 was clicked";
    console.log(event);
  }


  
  btnClick(){
    document.getElementById("btn").innerText = "Button was clicked";
  }

  onInnerDivClicked(){
    document.getElementById("inner").innerText = "Inner Div was clicked";
  }

  onOuterDivClicked(){
    document.getElementById("outer").innerText = "Outer Div was clicked";
  }




  btnClick1(eve){
    eve.stopPropagation();
    document.getElementById("btn1").innerText = "Button was clicked";
  }

  onInnerDivClicked1(eve){
    eve.stopPropagation();
    document.getElementById("inner1").innerText = "Inner Div was clicked";
  }

  onOuterDivClicked1(){
    document.getElementById("outer1").innerText = "Outer Div was clicked";
  }
}
