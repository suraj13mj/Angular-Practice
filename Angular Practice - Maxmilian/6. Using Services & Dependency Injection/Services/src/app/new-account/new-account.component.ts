
import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging-service.service'
import { AccountService } from '../account-service.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent{

  constructor(private logService: LoggingService, private accService: AccountService) {
    
    //Subscribing to the helloEvent
    this.accService.helloEvent.subscribe(
      (message: string) => alert("Message:"+message)
    )
  }

  onCreate(name: string, status: string) {
    this.accService.addAccount(name, status);
    //this.logService.logStatus(status);
  }

}
