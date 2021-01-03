import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {

  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  @HostListener('mouseover') mouseOver(data: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'yellow');
  }

  //We need to set it back to transparent when the mouse pointer is away from the element
  @HostListener('mouseleave') mouseLeave(data: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
  }

}

/*NOTES

1. @HostListener() allows us to listen to events raised from the DOM element housing this directive.
*/
