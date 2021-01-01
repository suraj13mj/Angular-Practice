
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { AttributeBindingComponent } from './attribute-binding/attribute-binding.component';
import { ClassBindingComponent } from './class-binding/class-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { TemplateVariableComponent } from './template-variable/template-variable.component';
import { EventFilteringComponent } from './event-filtering/event-filtering.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';

import { SummaryPipe } from './summary.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TemplateVariableComponent,
    TwoWayBindingComponent,
    PipesComponent,
    CustomPipesComponent,
    SummaryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
