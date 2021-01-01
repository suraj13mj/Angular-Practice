/* LifeCycle Hooks

1. ngOnInit() etc are called LifeCycle hooks.
    - Angular supports several lifecycle hooks.



2. When Angular comes across the selectors of the components that we have defined.
Ex: Selector of the Component
    <app-display-component 
      *ngFor="let numComp of numComponents"
      [compNo]="numComp"
      (compChange)="onCompChanged($event)"
      (compDelete)="onCompDeleted($event)">
    </app-display-component>

    - Here Angular creates an instance of the component that we defined, initialises it and then adds it to the DOM.
    - Here Angular goes through a series of phases while creating, initialising and adding the Component to the view.
    - Here, Angular provides us with an opportunity to hook to any of these phases, during their phase execution and execute some valuable code.
    - Inorder to hook to these phases while they are happening we have methods provided by Angular, that get executed during the particular phase execution.
    - These methods are called as LifeCycle Hooks i.e we can hook to the LifeCycle events (create, initialise, addtoView) etc. and execute some code when that particular phase is going on through these methods.
    
Note: - For N number of components of same type it creates N instances of the component.
    Ex: When *ngFor is used, then N instances of that component get created.

3. Lifecycle Hooks supported by Angular

ngOnChanges:            Called after a bound input property changes
    - Whenever the value of Input Properties changes i.e modified

ngOnInit:               Called once the component is initialized
    - When Component constructor is executed and Properties/fields of the component are initialise. 

ngDoCheck:              Called during every change detection run.
    - Whenever Angular Change Detection occurs, this LifeCycle Hook gets executed.
    - Whenever something related to a Component changes (component and view).
    - It also gets executed even a event is triggered, but no change caused by that event.
    - After every event occurance, Angular Change Detection runs, thus this hooks is also executed.
    - Then Angular re-renders for the component for changed items.
    - Angular Change Detection is carried in efficient way and doesn't cause performance issues.

ngAfterContentInit:     Called after content (ng-content) has been projected into view
    - Here when the content(Ex: HTML Markup) that is projected into the <ng-content> of the Child component.
    - Here when this content is initialised, during Parent component execution.
    - This Hook gets executed.
    - It is called only once for the first time, when <ng-content> has been projected.

ngAfterContentChecked:  Called every time the projected content has been checked
    - Here when the content projected has been added to the child component, where <ng-content> is present, then this hook is executed.
    - This doesn't mean that content is rendered in the view.
    - Only the content is now part of child component.
    - It is called after every change detection, to check for changes in <ng-content>

ngAfterViewInit:        Called after the component’s view (and child views) has been initialized
    - Whenever the view of the component to be rendered has been initialised.
    - This doesn't mean it is rendered yet.
    - It is called only once for the first time, when the view has been initialised.

ngAfterViewChecked:     Called every time the view (and child views) have been checked.
    - When view rendering is complete then this hook gets executed.
    - It is called after every change detection, to check for changes in the view.

ngOnDestroy:            Called once the component is about to be destroyed.
    - When the component is removed from the DOM i.e the component is destroyed by Angular.
    - Ex: *ngIf sets the component display to false.
    - Here we can perform some cleanup work related to the component, before the component is destroyed by Angular.


4. In Angular the constructor is called first while creating the instance of the component before these LifeCycle Hooks.
    - But if we try to access any Input Property from the constructor, then we may get undefined becoz.
    - In Constructor only instance on component is been created.
    - But the component instance, has not gone through the ngOnChanges, ngOnInit phases, wherein the Input Properties are assigned and Component is initialised.
    - Thus we may get undefined, if we access them in constructor.
*/