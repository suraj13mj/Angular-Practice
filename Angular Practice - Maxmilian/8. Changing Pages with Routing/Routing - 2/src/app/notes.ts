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

    
*/