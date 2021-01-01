import { Component, Input } from '@angular/core';

@Component({
  selector: 'bootstrap-panel',
  templateUrl: './bootstrap-panel.component.html',
  styleUrls: ['./bootstrap-panel.component.css']
})
export class BootstrapPanelComponent {

  @Input('heading') heading : string;
  @Input('body') body : string;
}
