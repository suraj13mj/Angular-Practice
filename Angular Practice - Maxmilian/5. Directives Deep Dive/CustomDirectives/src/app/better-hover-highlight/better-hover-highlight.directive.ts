import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHoverHighlight]'
})
export class BetterHoverHighlightDirective {
  @HostBinding('style.backgroundColor') newColor: string = 'transparent';

  @HostListener('mouseover') mouseOver() {
    this.newColor = 'violet';
  }

  @HostListener('mouseleave') mouseLeave() {
    this.newColor = 'transparent';
  }

}


/*NOTES

Suppose we want to change the Property such as style or value etc of a DOM Element.

1. Instead of clutting the code by using Renderer, ElementRef we can do it with a Simple appraoch.

2. @HostBinding() decorator allows us to bind certain Property of DOM element with a Property defined in the Directive.
    - Here we have bound the style.backgroundColor property of h1 with a Property newColor

3. We can now change the backgroundColor of DOM element by assigning new value to this Property i.e this.newColor
*/