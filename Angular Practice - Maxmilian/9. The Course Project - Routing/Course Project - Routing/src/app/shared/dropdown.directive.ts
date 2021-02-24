import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  /*
  isOpen: boolean = false;
  constructor(private renderer: Renderer2, private elRef: ElementRef) { }

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.renderer.addClass(this.elRef.nativeElement, 'open');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'open');
    }
  }
  */
  
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click') onClick() {
    this.isOpen = !this.isOpen;
  }

}
