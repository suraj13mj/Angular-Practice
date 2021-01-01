import { Component, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-main-input',
  templateUrl: './main-input.component.html',
  styleUrls: ['./main-input.component.css']
})
export class MainInputComponent {
  // newServerName = '';
  newServerContent = '';

  @Output('server-created') serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output('blueprint-created') blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  /* OR
  @Output() serverCreated: EventEmitter<{ serverName: string, serverContent: string }> = new EventEmitter();
  @Output() blueprintCreated: EventEmitter<{ serverName: string, serverContent: string }> = new EventEmitter();

  */

  onAddServer(servName: HTMLInputElement) {
    this.serverCreated.emit({serverName: servName.value, serverContent: this.newServerContent})
  }

  onAddBlueprint(servName: HTMLInputElement) {
    this.blueprintCreated.emit({ serverName: servName.value, serverContent: this.newServerContent });
  }

}



/*
1. Event Emitter is Generic type, we can specify the type of data that the event emits.

2. When we pass a template variable from the template
    servName: HTMLInputElement specifies the type of value received

3. If we pass directly the value from the template, then
    servName: string specifies the type of value received.

*/