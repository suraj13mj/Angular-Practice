import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCustomDirective1]'
})
export class CustomDirective1Directive {

  constructor(private el: ElementRef) { }
  
  @Input('format') format;


  @HostListener('blur') onBlur() {
    let lastname: string = this.el.nativeElement.value;

    if (this.format == 'UPPER')
      this.el.nativeElement.value = lastname.toUpperCase();
    else
      this.el.nativeElement.value = lastname.toLowerCase();
  }

}
