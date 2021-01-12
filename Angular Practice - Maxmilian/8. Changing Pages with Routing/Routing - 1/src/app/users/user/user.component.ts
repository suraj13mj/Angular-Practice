import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  paramsSubscription: Subscription;

  constructor(private presentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.presentRoute.snapshot.params['id'],
      name: this.presentRoute.snapshot.params['name']
    }

    this.paramsSubscription = this.presentRoute.params.subscribe(
      (newParams: Params) => {
        this.user.id = newParams.id;
        this.user.name = newParams.name;
      }
    )
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}



/* #NOTES

1. We can access the Route Parameters from the URL, using ActivatedRoute Service to access the current route
2. We can access the parameters present in current route using
      this.presentRoute.snapshot.params['parameterName']
    - parameterName used while registering the route.

3. When the route http://localhost/users/1/Max is loaded for the first time, Angular initialises the User Component i.e 
  - snapshot.params['id'] accesses the route parameters from the URL and initialises the User object.
  - Then Angular renders the Component.

4. But when we click on 'Load Anna' by setting the new route to http://localhost/users/10/Anna, 
  - The Route gets updated, but the component is not re-initialised and re-rendered for the updated content based on new route parameters.
  - Since the User Component has been initialised and rendered once for the first time, so when the new route also points to the same Component, Angular doesn't re-initialise and re-render the component.
  - Angular consider it as Performance overhead.
  - Since the user id and name are set during ngOnInit(), Thus it doesn't get updated.


5. In order to solve this, we have the params Observable
  - Observables is a feature that allows us to work with Asynchronous Tasks, i.e Task that might occur that any point. 
  - Observable is easy way to subscribe to some event that might occur in the future and then execute.
  - Params is one such Observables that allows to subscribe to Asynchronous event i.e change of route parameters in the present route.
  
  - We can get updated params as an argument of type Params from the route.
  - Then we can set the User object for updated route parameters.

6. It is always safe to subscribe and implement params Observable, if the current component can be reloaded from within the Component.
7. If we are sure that the Current Component can't be reloaded from the Current Component, it is sufficient to use snapshot.params property 

8. We we move away from the Current Component, Angular destroys the Component for us.
  - But the Observables continue to live in the memory, as they are not closely tied with the Component.
  - When we come back again to the Component, Angular creates a new Component, thus also creates a new params Observable for the Component.
  - Thus there will be 2 Params Observable in the memory.
  - For this purpose Angular bydefault clears the Route related Observables from the memory, whenever the Component is destroyed.
  - But for User created Observables, we must clear them from memory, whenever Component is destroyed using ngOnDestroy()
  - It is good practice to also implement ngOnDestroy() for Route related Params.

*/