
import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'            //Here we have [] becoz here we are using this Directive similar to the HTML Attributes i.e syntax of CSS Attribute selector
})
export class CustomDirectiveDirective {
  
  constructor(private el : ElementRef) { }

  @HostListener('focus') onFocus() {
    console.log('Focus event');
  }

  @HostListener('blur') onBlur() {
    console.log('Blur event');
    console.log(this.el);
    let name: string = this.el.nativeElement.value;
    console.log(name);
    this.el.nativeElement.value = name.toUpperCase();
  }

}





/*NOTES:

  1. To generate a custom directive boiler plate code
        ng g d CustomDirectiveName
  2. It is registered in the declarations section of AppModule
  3. Components, Pipes, Directives are registered inside declarations sections and Services inside providers section. 
  
  - We use the customDirective on the DOM Element

  4. HostListener allows us to subscribe to the DOM events raised from the DOM element that is hosting this Directive.
    - i.e DOM element that has this directive
    - We prefix HostListener Decorator, to DOM event handling methods
    - Whenever a particular event occurs on the DOM element hosting this directive, then respective event handling methods gets called.

  5. Upon Blur event, we need access to the value of entered by the User.
    - Because we have not passed any event object or value to these methods
    - In order to access the value of the input field, we need a reference to the DOM element (input field) hosting this directive. 
    - For this we need to inject ElementRef Obj, this is a service defined in Angular that gives us the reference of the DOM element hosting this directive.
    - constructor(private el: ElementRef) - declaring private creates and initialises the el variable with the reference (feature of Angular).  

  5. We access nativeElement.value Property of the DOM element to acess the value. 
  
  #UNDERSTAND

  1. We could have done it using using event binding, but using directives is more structured way to do it.
    - Using directives allows us to have multiple event methods defined.
    - Based on the event that is triggered that particular method in the directive gets executed. 
*/