import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[reverseIf]'
})
export class ReverseIfDirective {
  @Input('reverseIf') set revIf(condition: boolean) {
    if (!condition) {
      this.viewcontRef.createEmbeddedView(this.templateRef);
    } else { 
      this.viewcontRef.clear()
    }
  }

  constructor(private templateRef: TemplateRef<any>, private viewcontRef: ViewContainerRef) { }

}


/*NOTES

1. Here we need to receive the boolean value assigned to reverseIf directive.  Ex: *reverseIf="num%2==0"
  - Thus we declare a Input Property revIf.
  - For this Input property we assign setter method,
  - We assign setter bcoz whenever the boolean value changes, it must be changed in the Input Property revIf too.
  - This setter method must receive the changed boolean value
  - revIf is still a property and not a method.

  2. Once we receive the boolean value, based on it's value that particular HTML markup (template holding this structural directive) has to be displayed/ not be displayed.
      - If the boolean value is false then that particular HTML markup (template) has to be displayed.
      - If boolean value is true, then it must not be displayed.

  3. Similar to ElementRef, Angular provides us with access to 
    - TemplateRef: This gives us access to that particular part of template.
    - ViewContainerRef: This gives us access to the ViewContainer where this template has to be displayed

  4. We can these services provided by Angular, by injecting them into the Constructor.

  5. When condition is false, we create a embeddedView using ViewContainerRef and display the template.
    - When condition if true, we clear the view 

*/