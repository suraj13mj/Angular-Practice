
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './better-highlight/better-highlight.directive';
import { HoverHighlightDirective } from './hover-highlight/hover-highlight.directive';
import { BetterHoverHighlightDirective } from './better-hover-highlight/better-hover-highlight.directive';
import { CustomHighlightDirective } from './custom-highlight/custom-highlight.directive';
import { ReverseIfDirective } from './custom-structural-directive/reverse-if.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    HoverHighlightDirective,
    BetterHoverHighlightDirective,
    CustomHighlightDirective,
    ReverseIfDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
