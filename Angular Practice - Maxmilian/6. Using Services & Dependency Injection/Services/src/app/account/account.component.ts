import { Component, EventEmitter, Input, Output } from '@angular/core';

import { LoggingService } from '../logging-service.service';
import { AccountService } from '../account-service.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string}
  @Input() id: number;

  constructor(private logService: LoggingService, private accService: AccountService) {
  }

  onSet(status: string) {
    this.accService.modifyStatus(this.id, status);
    //this.logService.logStatus(status);

    //Emitting helloEvent whenever status changes
    this.accService.helloEvent.emit("This is a Hello Event");
  }

}
