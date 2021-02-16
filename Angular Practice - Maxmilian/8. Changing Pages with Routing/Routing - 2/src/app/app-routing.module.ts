
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
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
      { path: ":id", component: ServerComponent },
      { path: ":id/edit", component: EditServerComponent }
    ]
  },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "**", redirectTo: "/not-found", },
  // { path: "**", redirectTo: "not-found" }
  // { path: "**", redirectTo: "users/2/Max" }
  // { path: "**", redirectTo: "/users/2/Max" } 
]


@NgModule({
  imports: [
      RouterModule.forRoot(appRoutes)
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

*/








