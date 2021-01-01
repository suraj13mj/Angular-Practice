import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective2]'
})
export class CustomDirective2Directive {

  constructor(private el: ElementRef) { }
  
  @Input('appCustomDirective2') format;


  @HostListener('blur') onBlur() {
    let city: string = this.el.nativeElement.value;

    if (this.format == 'UPPER')
      this.el.nativeElement.value = city.toUpperCase();
    else
      this.el.nativeElement.value = city.toLowerCase();
  }

}
