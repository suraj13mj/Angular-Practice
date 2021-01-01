import { Component } from '@angular/core';

@Component({
  selector: 'app-template-variable',
  templateUrl: './template-variable.component.html',
  styleUrls: ['./template-variable.component.css']
})
export class TemplateVariableComponent {

  onKeyUp($event){
    document.getElementById('email').innerText = $event.target.value;
  }

  onKeyUp1(email){
    document.getElementById('email1').innerText = email;
  }
}
