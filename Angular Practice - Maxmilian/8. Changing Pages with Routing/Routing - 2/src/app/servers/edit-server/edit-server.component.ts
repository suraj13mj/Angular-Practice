import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  serverName: string = '';
  serverStatus: string = '';
  allowEdit = false;
  subscribedParams: Subscription;
  subscribedQueryParams: Subscription;

  constructor(private serversService: ServersService,
    private presentRoute: ActivatedRoute) { }

  ngOnInit() {
    const ID = +this.presentRoute.snapshot.params['id'];

    this.server = this.serversService.getServer(ID);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;

    this.subscribedParams = this.presentRoute.params.subscribe(
      (params: Params) => {
        const ID = +params.id;

        this.server = this.serversService.getServer(ID);
        this.serverName = this.server.name;
        this.serverStatus = this.server.status;
      }
    )

    this.subscribedQueryParams = this.presentRoute.queryParams.subscribe(
      (queryParams: Params) => {
        this.allowEdit = queryParams['allowEdit'] === '1' ? true : false;
      }
    )
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

  ngOnDestroy() {
    this.subscribedParams.unsubscribe();
    this.subscribedQueryParams.unsubscribe();
  }
}




/* #NOTES

1. The Query Parameter and Fragments are added to the Route, when user clicks on a Particular Server from the List of Servers.
  - localhost:4200/servers/1?allowEdit=0#loading  : In this route the Server Information is displayed.
  - But when the user clicks on Modify Server Details Button, the route is changed to
    localhost:4200/servers/1/edit 
    - Here the Query Parameters are lost i.e allowEdit queryparameter is lost

2. In order for EditServerComponent to allow user to edit or not, it needs to access that allowEdit Query Parameter.

3. In order to preserve the Query Parameter from the previous route, we can define queryParamsHandling property 
  - We pass this property while defining, the router navigation from one route to another using router.navigate() 
  - We can also Property bind to this property i.e [queryParamsHandling]="'preserve'"

  - This property can take 2 value i.e 
    - perserve : Perserves previous route Query Parameters and drops current route Query Parameters
    - merge: Retains and Merges Previous and Current route QueryParameters

  onModifyClick() {
    this.router.navigate(["edit"], {relativeTo: this.presentRoute, queryParamsHandling: 'preserve'});
  }
*/