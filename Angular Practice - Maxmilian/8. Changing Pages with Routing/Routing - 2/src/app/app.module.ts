import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "users", component: UsersComponent, children: [
      { path: ":id/:name", component: UserComponent }
    ]
  },
  {
    path: "servers", component: ServersComponent, children: [
      { path: ":id", component: ServerComponent },
      { path: ":id/edit", component: EditServerComponent }
    ]
  },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found"},
  // { path: "**", redirectTo: "not-found" }
  // { path: "**", redirectTo: "users/2/Max" }
  // { path: "**", redirectTo: "/users/2/Max" }
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServersService],
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

4. Angular path are matched by prefix i.e
      localhost:4200/servers/skgkgkhshgskhg   : is a invalid route

    - But since the first path /servers matches to ServersComponent, it displays the ServersComponent.
    - Thus in-order to have complete path entered by the user to be matched with paths registered in application.
    - We need to include another property i.e 
      pathMatch: 'full'


*/