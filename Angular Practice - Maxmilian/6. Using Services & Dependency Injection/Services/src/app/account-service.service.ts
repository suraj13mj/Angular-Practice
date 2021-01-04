import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./logging-service.service";


@Injectable()
export class AccountService {
     accounts = [
    {
      name: 'Demat Account',
      status: 'active'
    },
    {
      name: 'Trading Account',
      status: 'inactive'
    }
    ]

    //Declaring the helloEvent in the service
    helloEvent = new EventEmitter<string>();
    
    constructor(private logServ: LoggingService) { }
    
    addAccount(accName: string, accStatus: string) {
        this.accounts.push({ name: accName, status: accStatus });
        this.logServ.logStatus(accStatus);
    }

    modifyStatus(id: number, accStatus: string) {
        this.accounts[id].status = accStatus;
        this.logServ.logStatus(accStatus);
    }
}