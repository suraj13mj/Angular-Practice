import { OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-serve-component',
  templateUrl: './serve-component.component.html',
  styleUrls: ['./serve-component.component.css']
})
export class ServeComponentComponent {
  @Input('elem') element!: { type: string, name: string, content: string };

}



/*
  1. element: { type: string, name: string, content: string };
    - Here we are specifying the type of the element i.e Type annotating that element is of Object type.

  2. In the latest version of TypeScript, strict mode is enabled by default. Thus we must initialise all the properties and fields.
    - Otherwise it gives Error: Property '…' has no initializer and is not definitely assigned in the constructor

  3. We can disable the strict mode in the tsconfig.json. 

  4. Otherwise we have to initialise the fields either in constructor or while defining itself.
    Example:
    
    num: number = 0;
    isTrue: boolean = true;
    numArray: number[] =  [];
    obj: {roll: number, name: string} = {};

    OR

    num: number;
    isTrue: boolean;
    numArray: number[];

    constructor(){
      this.num = 0;
      this.isTrue = true;
      this.numArray = [];
      this.obj = {};
    }

    5. Sometimes properties may be assigned during runtime i.e through Property binding etc.
      - We can direct the Angular compiler, not worry about the property initialisation and it would assigned during runtime.
      - We use '!' definite assignment assertion.

      num!: number;
      isTrue!: boolean;
      numArray!: number;
      obj!: {roll: number, name: string};


*/