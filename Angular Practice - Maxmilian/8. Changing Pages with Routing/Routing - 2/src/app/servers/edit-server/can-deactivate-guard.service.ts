import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";


//Interface to be implemented by EditServer Component
export interface CanComponentDeactivate {
    canComponentDeactivate: () => Observable<boolean> | Promise<boolean> | boolean; 
}


//CanDeactivateGuard return type is of interface type i.e CanComponentDeactivate
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
    canDeactivate(component: CanComponentDeactivate, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return component.canComponentDeactivate();

        //returns the canComponentDeactivate() of EditServerComponent
    }
}





/* #NOTES

1. With CanDeactivate Guard, we can control whether user is allowed to leave a route or not.

2. Ex: In EditServer Component, if the user who is allowed to modify some details, changes some parameters but forgets to click Update button and accidently clicks on different route, Here state of that component get's lost if user accidently navigates away.
 - We can prevent this by displaying a prompt to the user whether he wants to discard the changes before navigating away.
 - We can do this using the CanDeactivate Guards


3. CanDeactivate is similar to the CanActivate and CanActivateChild Guards.
 - But while implementing CanDeactivate, we will usually have a property that keeps track of the state of the Component in the Component. 
 - In EditServer Component we have the changesSaved property to keep track of changes made.
 - In order to access the property we need implement the Guard logic in the Component itself, but the Guards are usually implemented as Services

4. In order to solve the above problem, we implement it as follows.
    1. We define a interface (CanComponentDeactivate) that forces the Component (EditServer) to implement the interface method, This method is designed to return same type as the canDeactivate method in CanDeactivate interface i.e (Observable<boolean> | Promise<boolean> | boolean)

    2. We define the CanDeactivate Guard similar to other Guards, but the canDeactivate method here returns the type of interface i.e CanComponentDeactivate
     - i.e It returns the canComponentDeactivate method of the EditServerComponent, which the interface CanComponentDeactivate forces the EditServer to implement.
     - Through this we are redirecting the Guard to the component, where we have access to the changesSaved property.

     - canComponentDeactivate() method in EditServer then houses the Guard logic, and also has access to the changesSaved property.

5. Here canDeactivate method receives are arguments following arguments from angular, when the guard gets activated
    - component: CanComponentDeactivate (Component on which Guard is implemented and the Component which CanComponentDeactivate interface implemented)
    - currentRoute: ActivatedRouteSnapshot (current Route)
    - currentState: RouterStateSnapshot (current state of the component)
    - nextState?: RouterStateSnapshot (next state of the component)
 

*/