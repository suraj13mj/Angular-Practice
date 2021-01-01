import { DisplayNameComponent } from './display-name/display-name.component';
import { AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements AfterContentInit, AfterViewInit  {
  nameArray: string[] = [];

  // @ViewChild('firstName') fName!: ElementRef;
  @ViewChild('firstName', {static: true}) fName!: ElementRef;
  @ViewChild(DisplayNameComponent) displayComponent!: ElementRef;

  @ContentChild('header', {static: true}) header!: ElementRef;

  ngOnInit() {
    //Can't access it here, bcoz content and View have not been initialised.
    console.log("FirstName:" + this.fName.nativeElement.value);
    console.log("Header:" + this.header.nativeElement.textContent);
  }

  ngAfterContentInit() {
    //But can be accessed here, bcoz content is been initialised
    console.log("Header:" + this.header.nativeElement.textContent);
  }

  ngAfterViewInit() {
    //Can access it here, bcoz View has been initialised
    console.log("FirstName:" + this.fName.nativeElement.value);
  }


  onBtnClicked() {
    this.nameArray.push(this.fName.nativeElement.value);

    console.log(this.fName);              //prints the entire input Properties
    console.log(this.displayComponent);   //prints the entire DisplayNameComponent Properties

    console.log(this.header.nativeElement.textContent);
  }
}



/* @ViewChild()

1. Firstly we can access date entered in the view using Two way binding.
2. Secondly we can access by defining a template variable on an element and passing the ElementRef or value of the element when particular event is triggered.

3. Suppose we need to access an element before certain event is triggered, then Angular provides us with @ViewChild() decorator function.
  - In order to access an element using @ViewChild(), we need to define a template variable on that element to be accessed (#firstName).
  - The we define a property or field, and assign it to type ElementRef, since returns the reference to the entire element. (fName).
  - For @ViewChild() decorator function we pass the template Variable.

  - We can then access the value of the element, using a property nativeElement.value.

4. We can also access the child components of the component(Ex: Parent: ViewChildComponent, Child: DisplayNameComponent).
  - Here we pass, the child component as an argument to @ViewChild decorator function, without inverted commas.

5. Suppose we plan on initialising/accessing fName property, in the ngOnInit() method so that input field in populated with this value, then we must add {static: true} for the @ViewChild() decorator
  - But it is not recommended to use this approach as there are better approaches that Angular provides.


  @ContentChild()

1. Suppose we want to access the content that is being projected into the <ng-content>, this content is present in the Parent component (AppComponent) from where the selector of child component (Viewchild) is being called.

  <app-view-child>
    <div>
      <h2 #header> Hello Welcome to the Example of View-Child and Content Child </h2><br>
  </div>
  </app-view-child>

2. Since it is part of the content, we use @ContentChild() to access it from the Component.
3. Earlier we used @ViewChild(), as there the content was part of View

 * LifeCycle Hooks Access

4. If we try to access @ContentChild('header') before ngAfterContentInit(), we can't access it.
5. Similaryly if to try to access @ViewChild('firstName') before ngAfterViewInit(), we can't access it.
*/