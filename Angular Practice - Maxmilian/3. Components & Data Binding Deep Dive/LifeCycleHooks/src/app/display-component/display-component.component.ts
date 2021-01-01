import {
  Component, Input, Output, EventEmitter,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  SimpleChange, SimpleChanges, ViewChild, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-display-component',
  templateUrl: './display-component.component.html',
  styleUrls: ['./display-component.component.css']
})
export class DisplayComponentComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked
{
  @Input() compNo: number;
  @Output() compChange = new EventEmitter<{ oldNo: number, newNo: number }>();
  @Output() compDelete = new EventEmitter<number>();

  @ViewChild('hcontent', {static: true}) content: ElementRef; 

  constructor() {
    console.log("Constructor Called...!")
  }

  // Life Cycle Hooks
  ngDoCheck() {
    console.log('ngDoCheck called...!')
  }
  
  ngOnChanges(changes: SimpleChanges) {
    let numChange: SimpleChange = changes.compNo;
    console.log("ngOnChanges Called...!");
    console.log(changes);
    console.log('Previous Value:' + numChange.previousValue);
    console.log('Current Value:' + numChange.currentValue);
    console.log('First Change..?:'+ numChange.firstChange)
  }

  ngOnInit() {
    console.log("ngOnInit Called...!");

    //Accessing before view has been initialised.
    console.log('Text:' +this.content.nativeElement.textContent); 
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called...!');
  }
  
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called...!');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called...!');

    //Accessing after the view has been initialised
    console.log('Text:' +this.content.nativeElement.textContent);
  }
  
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called...!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called...!');
  }



  //Event Binding methods
  onChangeComp() {
    this.compChange.emit({oldNo: this.compNo, newNo: 999})
  }

  onDeleteComp() {
    this.compDelete.emit(this.compNo);
  }

}


/*

1. It is a good practice to implement the interfaces where these methods belong.
  - So that Angular has knowledge about what lifecycle methods we are implementing, and highlight them if we make some errors in these methods.
  - If we do not implement the interfaces and directly add methods, then it works fine, but if we make some errors in these methods, Angular will not highlight them.
  - So that we look at a class, we can have an idea about different hooks this class implements.

2. ngOnChanges() is the only hook that receives an argument.
  - The argument is of type SimpleChange, that must be imported.

3. If we try to access the contents of the view (Ex: using @ViewChild) before ngAfterViewInit(), then we get nothing. Once the ngAfterViewInit() hook has been reached, we can access the contents of the view.
*/