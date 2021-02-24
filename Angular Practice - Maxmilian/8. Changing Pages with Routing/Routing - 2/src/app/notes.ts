/* #NOTES

1. Currently when a particular route is loaded we are displaying a Particular Component.
    - But it would be great to display both Servers List (Servers Component) and Each Server (Server Component) displayed next to each other.
    - Similarly for Users and User Component.
    - But the routes for both the components are different and it is not possible.

2. Thus, we need to define Nested Routes or Child Routes, so that components of both Routes can be displayed simultaneously
    localhost:4200/servers              - Parent Route
    localhost:4200/servers/1            - Nested Route
    localhost:4200/servers/1/edit       - Nested Route

3. Creating Nested Routes (Ex: In AppModule)

4. Preserving the Query Parameter, when a particular router holding the query parameters is changed to another. (Ex: In EditServer Component)

5. Redirecting invalid paths to a certain Page Not Found Route (Ex: In AppModule).

6. Outsourcing the Route Configuration (Ex: In apps-routing.module.ts)

7. Guards - functionality, logic, code which is executed before a route is loaded or once you want to leave a route.
    - Guards are the functionality built-into the Angular router.
    - These guards help us execute some code (Ex: Checking if user is logged in) before accessing that route or leaving the route
    
    - Instead of Guards, we could execute this code in the onInit() method of the component, but it is cumbersome to repeat this code in the onInit() method for every Component route for which we want check.
    - Secondly if the route Ex: /servers has many child routes 
        Ex: /servers/edit-server
            /servers/display 
            /servers/load etc

            - Here we have to repeat the code in each of these child components i.e Edit Server, Display, Load Component because if servers route is not accessible (bcoz of some condition Ex: Login), then it's child component also must not be visible.

    - Instead with Guards we can define it once (similar to services) and add it to any route for which we want to check.

8. Protecting Routes with canActivate Guard. (In auth-guard.service.ts)

9. Protecting Child (Nested) Routes with CanActivateChild Guard (In auth-guard.service.ts)

10. Controlling Navigation with CanDeactivateGuard (In can-deactivate-guard.service.ts)

11. Passing static data to a Route. (Error Component).

12. Passing dynamic data with the resolve guard. (ServerResolver).

13. Understanding Location Strategies i.e using hash in the route (AppRoutingModule)    
*/