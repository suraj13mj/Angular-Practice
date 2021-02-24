
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';
import { ErrorComponent } from './error/error.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { UsersComponent } from './users/users.component';



const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: 'full'},                           
  { path: "home", component: HomeComponent},                        
  {
    path: "users", component: UsersComponent, children: [
      { path: ":id/:name", component: UserComponent }
    ]
  },
  {
    path: "servers",
    //canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    component: ServersComponent,
    children: [
      { path: ":id", component: ServerComponent, resolve: {server: ServerResolver} },
      { path: ":id/edit", component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
  //{ path: "not-found", component: PageNotFoundComponent },
  { path: "error", component: ErrorComponent, data: {message: 'Static Error Message'}},
  { path: "**", redirectTo: "/error" },
  // { path: "**", redirectTo: "not-found" }
  // { path: "**", redirectTo: "users/2/Max" }
  // { path: "**", redirectTo: "/users/2/Max" } 
]


@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes, {useHash: true})
    ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}











/* #NOTES
1. If there are more 2 or more routes, it's better to create a second module that can hold all the routes related to the entire application.

2. Here we define a new module AppRoutingModule, to hold all the routes of the application.

3. We configure the @NgModule() decorator
    - Here we define the imports array, that registers the appRoutes using RouterModule.forRoot(appRoutes)

    - We then add the exports array, here we specify what Modules of this AppRoutingModule can be accessed by other modules that import the AppRoutingModule.
    - Here, we have configured the RouterModule with the routes that are to be used in the application.
    - Thus we export the RouterModule, so that the Module importing AppRoutingModule can have access to the routes registered with RouterModule

    - Thus we outsource the registered routes from AppRoutingModule to AppModule (instead of cluttering them in AppModule)

------------------------------------------------------------------------------

Understanding Location Strategies

1. When we host the Angular application on a real server, routes may not work out of the box 
  - Because, the route is always parsed or handled by the web server first.
  - Here, in the Development setup, the route is handled by the development server first.
  - But this development server has one special configuaration i.e it always returns index.html file, for which Angular app is configured and Angular CLI handles the rest of the routing.
  - In case of Real Web Server we need to make this configuration.
  - Otherwise for routes such as /server /user the real web server searches for respective html files, if not found it return 404 error i.e HTML file not found

2. If we are not able to configure the Real web server or we need to support very old browsers, we can fallback to older technique used for routing i.e using hash sign in our routes.

3. We can enable it in our app-routing.module where we register our routes.
  - We can a pass a second argument to the forRoot method i.e JS object i.e {useHash: true}
  - The default if false

  RouterModule.forRoot(appRoutes, {useHash: true})

4. This hashtag inform the Real web server to only care about the part in the URL before the hashtag, rest of the part will be ignored by the web server.
  - The part after the hashtag will now be parsed by the Angular CLI
*/








