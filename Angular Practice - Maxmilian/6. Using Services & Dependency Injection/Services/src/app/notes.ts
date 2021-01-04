/*NOTES

1. Angular Dependency Injector is a Hierarchical Injector.
    - If we provide a Service for a component, then that service is available to that component and all it's child component.
    - We provide a service for a component by adding it to the providers section.

2. There are 3 levels where we can provide services to the component
    * AppModule: If we provide a service here, then that same instance of the service is available to all the components of the Angular Application, including other services.
    - This is the highest possible level.

    * AppComponent: I we provide a service here, then that same instance of Service is available to this component and all it's child component. But the services provided here are not available to other services.

    * Each Component: We can provide a service at the each component.
   
* This Hierarchical structure is provided in order for Generalised to Specific Services to be provided from Higher to Lower level components.

3. If we provide a service at AppModule level and AppComponent level, then the instance of service at AppComponent level overrides the same service provided at AppModule level.

4. If we provide a service at Each Component, then this instance of service overwrites any service provided at higher levels.

5. For group of related components, inorder for the functionality to work properly we have to provide the service at the Parent level, instead of providing it at each component.

-----------------------------------------------------------------------------------------------------------
* Injecting Service to Services

1. Suppose we want to inject a Service to another Service
    Ex: Injecting LoggingService to AccountService

2. Firstly, the Service that is to be injected, has to be provided in the AppModule i.e LoggingService

3. Secondly, the Service for which LoggingService is injected i.e AccountService, we need add @Injectable() decorator indicating Angular that for this Service, some other service can be injected.

-----------------------------------------------------------------------------------------------------------
*Cross Component Communication

1. Services makes Component Communication easier, as we can easily access data between components through these services.
    - Services make code cleaner, by eliminating the complex communication done using combination of @Input and @Output

2. We can make use of services to emit events from one component and subscribe to that event in other component.
    - This can done defining the event that can be emitted in the service.
    - Then emitted the event from the component (that has this service provided).
    - Then subscribing to the emitted event from another component (that has this service provided).

*/