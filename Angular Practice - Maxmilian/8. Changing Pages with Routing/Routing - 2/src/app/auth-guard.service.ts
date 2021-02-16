import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this.authService.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    }
                    else {
                        this.router.navigate(['/']);
                    }
                }
            );
    }



    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        //Since the Logic for this remains same, we can simply call above defined canActivate() method
        return this.canActivate(route, state);
    }
}





/*
#NOTES

1. Guards are inherently services, they guard certain actions like navigating to, around or away from it.
 - But here we need to implement the respective guard interface (Here CanActivate interface) so that it becomes a Guard.
 - CanActivate interface forces us to implement the canActivate method.
 - This method takes two argument, 1. ActivatedRouteSnapshot 2. RouterStateSnapshot
 - This arguments are provided by the Angular when it comes across route for which guards have been defined.
 - This method also returns something, it can be either an Observable or Promise (if the code within Guard executes Aysnchronously) or simple a boolean ( if the code within Guard executes Synchronously)

2. Fake Auth Service (Ex: In auth.service.ts), this service mocks the process of Login and Logout (In real scenario this might reach out to a server and then allow to login or logout, This is a Aysnchronous Process).

3. In order to inject auth.service.ts we need to add @Injectable() decorator

4. We check the authenticated state using Injected AuthService, if the value retured by isAuthenticated() method in the service is true, we return true.
    - else we navigate the user to home route.

5. If isAuthenticated() method in the AuthService returned value Synchronously, then we would directly verify true or false 
    - Since it returns a promise, we use .then


6. Next step is to define which routes should be protected by this guard.
    - We can do this by adding canActivate property to the routes in app-routing.module.ts for which we want to apply the Guard.
    - This property takes an array of Guards that we want to apply for this route
    - The Guards get applied to all the child routes too.

7. We also need to add the AuthGuard and AuthService in the providers section of the AppModule


---------------------------------------------------------------------

1. Suppose if want to display the main route, but add guards to the child routes, then we can do it in 2 ways

    1. Add canActivate property to all the child routes instead of main route 
    2. Add canActivateChild property to the main routes so that Main route is displayed but child routes are protected

2. Method 2 is preferred, for this we need to implement canActivateChild interface in the AuthGuard (similar to the canActivate interface)

3. Here we add canActivateChild property to the main route.


 */