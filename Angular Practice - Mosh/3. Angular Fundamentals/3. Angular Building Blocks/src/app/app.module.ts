
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyFirstCompComponent } from './my-first-comp.component';
import { DirectivesComponent } from './directives/directives.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { GeneratedComponentComponent } from './generated-component/generated-component.component';

import { MyService } from './my-service.service';


@NgModule({                          //ngModule decorator is used to make AppModule class a Module,  We pass an object defining certain properties of the module.
  declarations: [                   
    AppComponent,                    //App Component is the predefined component.
    MyFirstCompComponent,            //We register the component in the declarations section, we first need to import the component.
    GeneratedComponentComponent,
    StringInterpolationComponent,
    DirectivesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ MyService ],
  bootstrap: [AppComponent]
})

export class AppModule { }


//Next step is to use the selector <my-first-comp></my-first-comp> in app.component.html
