import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .foreColor{
      color : white;
    }
  `]
})
export class ServerComponent {
  servers = [];
  serverName: string = "Test Server";
  serverStatus: string;
  serverMsg: string;

  onBtnClick() {
    this.servers.push(this.serverName);
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverMsg = "A new server with name " + this.serverName + " was added. Status: "+this.serverStatus;
  }

  getBackgroundColor() {
    return this.serverStatus === 'online' ? 'green' : 'red'; 
  }
}
