//To make MyFirstCompComponent class a Component, we need to add the @Component decorator

import { Component } from '@angular/core';  //Typescript importing syntax

@Component({                                //We pass an object to the Component decorator function, specifying the properties of the component
    selector : "my-first-comp",             //selector specifies the how component can be used in HTML page  Ex: <my-first-comp></my-first-comp>, where ever we use the selector, Angular renders this component
    template : `1. Example of Creating component
                <h3> My First Angular Component </h3> 
                `                                       
})                                                                  //HTML Markup of the component

export class MyFirstCompComponent {         //In order to make it visible to Angular, we need to export it.
}


//Second step after creating a component is to register the component in a module.
//Here we have only 1 module being defined i.e app.module.ts


//We can use backtick (``) to make inline html multi-lined, instead of ('') single quotes




















/*

To Create Components there are 3 steps

1. Creating a Component
2. Registering the Component in a module
3. Add the component selector in HTML Markup of AppComponent


Naming convention for component: "my-first-comp.component.ts" or "courses.component.ts"
*/