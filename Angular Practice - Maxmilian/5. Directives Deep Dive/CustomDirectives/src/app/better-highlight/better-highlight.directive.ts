import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'lightblue');
  }
}


/*NOTES:

1. Directly accessing the element in the DOM to modify some of it's properties is not a good practice/recommended practice.

2. When Angular renders the templates in the browser, The Browser makes us available the DOM and it's properties and also allows us to modify them.
  - Angular also runs in service workers, where accessing the DOM elements to modify properties is not allowed.
  - Thus Angular provides us with Renderer2 service, where in using it we can modify properties of DOM elements.
  - This Renderer2 implemented by Angular and is provided by us to be used and is also a better approach.

3. This renderer object has several methods that allow us to perform different functionalities on the DOM elements.
  - We need to pass the reference of the DOM element, where the directive is housed using ElementRef
  - Here we passing only the reference of the DOM element, setting of style is handled by Renderer.
  - Earlier we directly modified the style using ElementRef

*/
