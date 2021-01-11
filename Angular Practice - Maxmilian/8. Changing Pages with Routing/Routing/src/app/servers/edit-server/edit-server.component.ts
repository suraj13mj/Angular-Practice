
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server !: { id: number, name: string, status: string };
  serverId;
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService,
    private router: Router,
    private presentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.serverId = this.presentRoute.snapshot.params['id'];
    console.log(this.serverId)

    this.server = this.serversService.getServer(this.serverId);
    console.log(this.server);
    
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.presentRoute.params
      .subscribe(
        (newParams: Params) => {
          this.serverId = newParams.id;

          this.server = this.serversService.getServer(this.serverId);
          this.serverName = this.server.name;
          this.serverStatus = this.server.status;
        }
      )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  onReloadServer() {
    this.router.navigate(['servers']);      //navigates to http://localhost:4200/servers         
    
    //this.router.navigate(['servers'], { relativeTo: this.presentRoute });

    /* navigates to http://localhost:4200/servers/servers */
  }

  onLoadTestServer() {
    this.router.navigate(
      ['servers', 2, 'edit'],
      {
        queryParams: { allowEdit: '1', allowSave: '1' },
        fragment: 'loading'
      }
    )
  }

}


/* #NOTES

  1. When we use Relative path in router.navigate() method, we do not get any errors becoz here it won't navigate to http://localhost:4200/servers/servers instead it navigates to http://localhost:4200/servers 

  2. Because unlike routerLink directive, router.navigate() doesn't have idea about the present route it is present on.
    - It is designed to directly load from the root route i.e http://localhost:4200/

  3. Suppose we need route to be loaded relative the present route. 
    - We can pass an object specifying the Present Route
    - router.navigate(['servers'], {relativeTo: this.presentRoute})
    - We can get the present route, with another service that Angular provides i.e ActivatedRoute

*/