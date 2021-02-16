import { RouterModule } from '@angular/router';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard.service';
import { AuthService } from './auth.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ServersService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }



/* #NOTES

* Creating Child / Nested Routes
1. In order to create Nested Routes for a particular route, we another property that can be passed with a route i.e children
  - This children property again takes an array of JavaScript objects containing path and component for the nested routes
  Ex: {
        path: "servers", component: ServersComponent, children: [
          { path: ":id", component: ServerComponent },
          { path: ":id/edit", component: EditServerComponent }
        ]
      }

  - For Nested route paths, we only mention the path that get's appended to the parent route.

2. Next step is to specify <router-outlet> directive for these Nested Route Components.
  - The <router-outlet> in the AppComponent, is a hook to display the components at the Root Level or Top Level Components
      localhost:4200/servers
      localhost:4200/users
      localhost:4200/

  - In order to display the Components of the nested routes, we need specify another <router-outlet> directive within each of these Root-Level component i.e ServersComponent and UsersComponent.

--------------------------------------------------------------------------------------
* Redirecting Invalid Paths.

1. First, we create a new Componet for displaying Page Not Found message.
   - then we register a path for displaying this Component.

2. In order to catch all the invalid path entered by the user, we can define a wildcard i.e "**"
  { path: "**", redirectTo: "/not-found" }

  - This wildcard path (Generic path) catches all the paths, thus it is important to specify this generic path at the end.
  - Angular matches/parses the paths from top to bottom.

3. For this generic path, we can add the redirectTo property, that redirects all the invalid routes to another path.
      - component property: renders the respective Components for the path.
      - redirectTo property: redirects the current path to another path.

    - For path property, we shouldn't prefix the path with '/'
    - For redirectTo we can use absolute or relative path.

4. Angular matches paths using 2 strategies 1. Prefix 2. Full 
    - For Normal Route matching, Angular uses Full Strategy, the entire url must match any of the listed routes.
    
    - When using redirection in Angular i.e using redirectTo, Angular matches the paths using 'Prefix' strategy.
    - 'Prefix' strategy is the default strategy while matching (for redirection)
    - By default, the router checks URL elements from the left to see if the URL matches a given path registered in the app, and stops when there is a match. 
    - Angular matches the listed routes from top to bottom, if the URL is part of some listed route then that path gets matched

    Ex: { path: '', redirectTo: '/user' } 

        Listed Routes:
        { path: "home", component: HomeComponent}
        { path: "server", component: ServerComponent}
        { path: "user", component: UserComponent}

        Here: http://localhost:8200/home route gets matched first bcoz the url '' is part of every route

        Thus we use pathMatch: 'full' strategy
    
    ------------------------------------------------------------------------------------------------------------
    * MAX Notes

    In our example, we didn't encounter any issues when we tried to redirect the user. But that's not always the case when adding redirections.
    By default, Angular matches paths by prefix. That means, that the following route will match both /recipes  and just / 

    { path: '', redirectTo: '/somewhere-else' } 

    Actually, Angular will give you an error here, because that's a common gotcha: This route will now ALWAYS redirect you! Why?

    Since the default matching strategy is "prefix" , Angular checks if the path you entered in the URL does start with the path specified in the route. Of course every path starts with ''  (Important: That's no whitespace, it's simply "nothing").

    To fix this behavior, you need to change the matching strategy to "full" :

    { path: '', redirectTo: '/somewhere-else', pathMatch: 'full' } 

    Now, you only get redirected, if the full path is ''  (so only if you got NO other content in your path in this example).

*/