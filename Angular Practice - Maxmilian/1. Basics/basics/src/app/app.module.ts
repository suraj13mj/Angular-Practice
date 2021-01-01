import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ServerComponent } from './server/server.component';
import { UsernameComponent } from './username/username.component';
import { AssignmentComponent } from './assignment/assignment.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    ServerComponent,
    UsernameComponent,
    AssignmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/* How Angular gets loaded and started

  * Angular Applications are Single Page Applications, i.e only index.html file is served.
  * But how come Browser comes to know of <app-root> tag in the index.html file

  *Process Flow
 
  1. The index.html file that we write / Angular provides, doesn't have any script imports.
  2. But when we see the index.html loaded by the browser, we see 3 to 4 script imports.

  3. Whenever Angular CLI serves the application, the first file that gets executed is the main.ts file.
  4. This main.ts file bootstraps / starts the Angular Application by passing the app.module.ts (AppModule) as an argument. Based on condition the application starts in Prod / Dev using some Node Modules.

  5. In the AppModule (app.module.ts), we see the bootstrap section in the @NgModule decorator.
  6. This Bootstrap section specifies the components to be bootstraped i.e components that Angular should be aware of while scanning the index.html, usually app.component.ts (AppComponent)

  7. Then in AppComponent(app.component.ts), we see the <app-root> selector being used.
  8. This indicates Angular that HTML content of this component has to be loaded on to the index.html file where the <app-root> selector has been used.
  -- Usually the AppComponent <app-root><app-root> consists several other components tags in it, defined/developed by the user which are to be rendered, because we consider AppComponent as the root component. 

  9. Thus Angular creates a bunch of JS file bundles that get injected dynamically into index.html using script tag during execution.
  10. These Bundles contain all the information about all the components used in the Angular application.

  11. Through this script files, Browswer becomes aware of the <app-root> tag.

*/


/*NOTES:
  1. package.json file contains the list of all the dependencies the Angular Project uses.
    - dependencies section contains all the node modules requried for Production (i.e actual execution).
    - devdependencies section contains all the node modules required/used for Development.
    
  2. angular.json file contains the configuartion for the Angular CLI.
    - Ex: We need to make aware to CLI that we have added Bootstrap styles, by adding reference to bootstrap node module.
      "styles": [
        "node_modules/bootstrap/dist/css/bootstrap.min.css",
        "styles.scss"
      ]
*/