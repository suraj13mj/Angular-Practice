/*

1. Here, we have 2 child components i.e MainInput and Server Component.
    - MainInput component is responsible for taking the input about servers and blueprints.
    - Server component is responsible for displaying the Server name and it's type.

2. Here, AppComponent is the Parent component, housing both the MainInput and Server Component.

3. In The AppComponent we maintain an array field serverElements = [], to append all the Servers created with MainInput Component.
    - We then use the info present in servers[] array to display the Servers using Server Component.

4. In order to do the above we need to perform component communication.
    - MainComponent has to pass Server name and details to the Parent Component when new server is created, so that it can appended to the array.
    - AppComponent has to then append the details to the array.
    - We should then be able to pass the server array elements, so that it can be displayed using Server Component.

5. We achieve these using Input and Output Properties, so that we can pass values to the components and handle events generated by these components, using Property and Event Binding.

6. The fields or Properties of the components are not visible outside the component, if these Properties are made visible to other Components, then we can Property bind these Properties/fields to pass data from other outside components (from parent to child component) .
 - We can do this using @Input() decorator.

 7. Similarly, if we want to pass data from within the Component to other component outside (from child to parent) when a particular event/change is occured. we can do this by rasing/emitting events from within the component, so that it can be handled by the parent component.
 - We can also pass data while emitting the events using $event.

*/