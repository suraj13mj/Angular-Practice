import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainInputComponent } from './main-input/main-input.component';
import { ServeComponentComponent } from './serve-component/serve-component.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { DisplayNameComponent } from './view-child/display-name/display-name.component';

@NgModule({
  declarations: [
    AppComponent,
    MainInputComponent,
    ServeComponentComponent,
    ViewChildComponent,
    DisplayNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
