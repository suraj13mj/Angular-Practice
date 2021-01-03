import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomHighlight]'
})
export class CustomHighlightDirective {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'orange';

  @HostBinding('style.backgroundColor') bgColor: string;

  @HostListener('mouseover') mouseOver() {
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.bgColor = this.defaultColor;
  }

}
