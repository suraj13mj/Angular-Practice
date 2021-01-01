import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PassingEventDataComponent } from './passing-event-data/passing-event-data.component';
import { StylesComponent } from './styles/styles.component';
import { ShareComponent } from './share/share.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { CommentComponent } from './comment/comment.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { NgContentPanelComponent } from './ng-content-panel/ng-content-panel.component';
import { NgContainerPanelComponent } from './ng-container-panel/ng-container-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    PassingEventDataComponent,
    StylesComponent,
    ShareComponent,
    SubscribeComponent,
    CommentComponent,
    BootstrapPanelComponent,
    NgContentPanelComponent,
    NgContainerPanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
