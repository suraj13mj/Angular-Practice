
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server : { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';

  constructor(private serversService: ServersService,
    private router: Router,
    private presentRoute: ActivatedRoute) { }

  ngOnInit() {
    //Accessing Query Parameters and Fragments using snapshot
    console.log(this.presentRoute.snapshot.queryParams);
    console.log(this.presentRoute.snapshot.queryParams);

    //Accessing Query Parameters and Fragments by subscribing to queryParams and Fragments Observables
    this.presentRoute.queryParams.subscribe(
      (queryParameter: Params) => console.log(queryParameter)
    )

    this.presentRoute.fragment.subscribe(
      (route_fragments: string) => console.log(route_fragments)
    )
    
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
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
    this.router.navigate(['servers', 2, 'edit'], { queryParams:{allowEdit: '1', allowSave: '1'}, fragment:'loading' })
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


 -------------------------------------------------------------------
 * Passing Query Parameter and Fragments

  1. We can pass Query Parameters and Fragments to the URL using 
      - RouterLink Directive in the template (on links and button etc).
      - Thru Event Handling methods using router.navigate()

  2. Using RouterLink Directive
    <button 
      [routerLink]="['/servers', 1, 'edit']"
      [queryParams]="{'allowEdit': 1, 'allowSave': 1}"
      [fragment]="'loading'"> 
      Load Production Server
    </button>

    - Here to pass Query Parameters we bind to [queryParams] property of RouterLink Directive.
    - To pass Fragments, we bind to [fragment] property of RouterLink Directive

  3. Using router.navigate()
    this.router.navigate(['servers', 2, 'edit'], { queryParams:{allowEdit: '1', allowSave: '1'}, fragment:'loading' })

    - Here we pass an objects containing queryParams and fragments as keys to the navigate method.

  ---------------------------------------------------------------------
  * Accessing the Query Parameters and Fragments fromt the URL
 
  1. In order to access the query parameters and fragements, first we need to inject ActivatedRoute service

  2. We can access the query parameters and fragments using 
    * using snapshot
    * By subscribing to the queryParams and fragments Observables
  
  * The Concept is similar to Route Parameters.

  */