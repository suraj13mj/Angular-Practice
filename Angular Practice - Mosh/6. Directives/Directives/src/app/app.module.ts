import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { HiddenComponent } from './hidden/hidden.component';
import { NgSwitchCaseComponent } from './ng-switch-case/ng-switch-case.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgforChangeDetectionComponent } from './ngfor-change-detection/ngfor-change-detection.component';
import { NgforTrackbyComponent } from './ngfor-trackby/ngfor-trackby.component';
import { LeadingAsteriskComponent } from './leading-asterisk/leading-asterisk.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { SafeTraversalOperatorComponent } from './safe-traversal-operator/safe-traversal-operator.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { CustomDirComponentComponent } from './custom-dir-component/custom-dir-component.component';
import { CustomDirective1Directive } from './custom-directive1.directive';
import { CustomDirective2Directive } from './custom-directive2.directive';
import { ZippyComponent } from './zippy/zippy.component';

@NgModule({
  declarations: [
    AppComponent,
    NgIfComponent,
    HiddenComponent,
    NgSwitchCaseComponent,
    NgForComponent,
    NgforChangeDetectionComponent,
    NgforTrackbyComponent,
    LeadingAsteriskComponent,
    NgClassComponent,
    NgStyleComponent,
    SafeTraversalOperatorComponent,
    CustomDirectiveDirective,
    CustomDirComponentComponent,
    CustomDirective1Directive,
    CustomDirective2Directive,
    ZippyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
