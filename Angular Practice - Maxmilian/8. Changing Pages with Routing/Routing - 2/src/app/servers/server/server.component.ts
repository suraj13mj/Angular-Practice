import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  subscribedParams: Subscription;

  constructor(private serversService: ServersService,
    private presentRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    /*
    const ID = +this.presentRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(ID);

    this.subscribedParams = this.presentRoute.params.subscribe(
      (params: Params) => {
        const ID = +this.presentRoute.snapshot.params['id'];
        this.server = this.serversService.getServer(ID);
      }
    )
    */
    
    //Using ServerResolver

    this.presentRoute.data.subscribe(
      (data: Data) => {
        this.server = data['server'];
      }
    )
  }

  onModifyClick() {
    this.router.navigate(["edit"], {relativeTo: this.presentRoute, queryParamsHandling: 'preserve'});
  }

  /*
  ngOnDestroy() {
    this.subscribedParams.unsubscribe();
  }
  */
}
