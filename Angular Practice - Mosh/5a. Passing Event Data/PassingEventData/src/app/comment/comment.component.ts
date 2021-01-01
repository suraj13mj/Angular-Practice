import { viewClassName } from '@angular/compiler';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'comment',
  templateUrl: './comment.component.html',
  encapsulation : ViewEncapsulation.Emulated
})
export class CommentComponent  {
}
