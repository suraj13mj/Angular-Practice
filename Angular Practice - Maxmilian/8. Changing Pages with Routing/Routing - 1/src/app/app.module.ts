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
  { path: "", component: HomeComponent },                           //localhost:4200/
  { path: "users", component: UsersComponent },                     //localhost:4200/users
  { path: "users/:id/:name", component: UserComponent },            //localhost:4200/users/1/Max
  { path: "servers", component: ServersComponent },
  { path: "servers/:id/edit", component: EditServerComponent }      //local:4200/servers/1/edit
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

1. Since the Routes are responsible for the entire application, we need to define them in the AppModule.

2. Then we define a variable Ex: appRoutes of type Routes (importing it from the Router module), This is an array of JavaScript objects defining each route
  - The path specifies the subdomain, we shouldn't include the slash ('/')
  - The empty path specifies the default route (localhost:4200/)
  - When a particular path occurs in the url, then it's respective Component get's loaded.

3. Next step is to register these defined routes i.e appRoutes
  - We import the RouterModule and add it to the imports section
  - Here this RouterModule has a static method to register these methods i.e RouterModule.forRoot(appRoutes)
  - After registering the routes, the RouterModule defines these routes for our Angular application.

4. Next step is to specify where the templates of the component have to be rendered on AppComponent, when it's respective path occurs in the url.
  - We can specify this by adding Angular directive <router-outlet></router-outlet>
  - Angular renders the templates of the components of the selected path, after this directive.
  - We usually add this in the app.component.html

5. Next step is to add some working links to our tabs in the Navigation Bar (Ex: In AppComponent)

----------------------------------------------------------------------------------------

1. { path: "users/:id", component: UserComponent } 
  - This specifies the routes that can called dynamically i.e id is the router parameter that is passed to this route.
  - id can be anything Ex: 1, or suraj13mj or true etc
  - The route parameter that is passed from the url
  - When this route with routeParameter is triggered, it displays respective component (UserComponent)


  2. Similar to the Route Parameter, we can pass
    1. Query Parameter along with URL, Query Parameter are separated from the Router Parameters using ?
      - Query Parameters are separated from each other using &
      Ex: localhost:4200/servers/4/edit ? allowEdit:1 & allowSave:1
    
      - Query Parameters are not declared in the Routes array, as they are just info passed for adjusting different setting while rendering the components.
      - These Query Parameters can be accessed from the Component, thus adjusting Component rendering based on the value of Query Parameter.

    2. Fragments are separated from Query Parameters with # 
      - We can pass only 1 Fragment with an URL. 
      - Fragments are also passed as an info with URL, generally to specify which specific place to jump on the app.
      Ex: localhost:4200/servers/4/edit ? allowEdit:1 & allowSave:1 # loading
    

*/