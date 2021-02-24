import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { ServersService } from "../servers.service";


interface Server {
    id: number,
    name: string,
    status: string
}

@Injectable()
export class ServerResolver implements Resolve<Server>{

    constructor(private serversService: ServersService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id']);
    }
}




/*NOTES

1. Angular provides us with a data property that can passed with route and can be fetched when the route gets loaded.
  - This data can be used for any logic related purposes.

2. Similar to static data that can be passed to the route and accessed from the component, we can also pass Dynamic data to the route.

3. In-order to pass Dynamic data to the route, we need to a define a service similar to canActivate and canDeactivate guards, so that we can run some code (inorder to fetch the dynamic data Ex: Fetching data from the server) before the route get's loaded.

4. Other approach is load the route first i.e render the component, then fetch data from the server in the onInit() method of component and display some spinner whilst you are doing so.

5. For passing dynamic data  we need to define a service (ServerResolver) that implements Resolve interface, which returns the data fetched or resolved by the resolve method.
    - Resolve interface forces the class to implement the resolve method.
    - This method takes ActivatedRouteSnapshot, RouterStateSnapshot as its two parameters.
    - The return type can be Observable or Promise or simply Synchronous data.
    - Here since we are fetching the Server data using ServerService, the return type is of type <Server> defined by the Server Interface.
    - Since we are using ServerService which returns Synchronous data, here the return type is synchronous server data.

6. Here we use only ActivatedRouteSnapshot and RouterStateSnapshot instead of ActivatedRoute and StateSnapshot because this ServerResolver service gets executed each time the component is refreshed, even from within the component, unlike the onInit() methods within the component that require us to subscribe to the Observables.
    
    
7. Next step is to register this service in the providers section of the AppModule.

8. Next we need to add the resolve property to the route that needs this ServerResolver service to executed before the route is loaded.
    - This property takes the JS object
    - We map all the resolvers here
    - Ex: 
    { path: ":id", 
      component: ServerComponent, 
      resolve: {server: ServerResolver, property2: Resolver2.....}

    - The data returned by the respective Resolver is stored in the respective property.

9. Next we can get this server property data from the component, once the route gets loaded after executing the Resolver service, using the data property that we used to access the static data.
    ngOnInit(){
        this.presentRoute.data.subscribe(
            (data: Data) => {
                this.server = data['server'];
            }
        )
    }
    
    - Here we use Observable (i.e subscribe to the Data property) bcoz the server data can be different, when we reload the component from within the component.
    - i.e If we click on Different Server Tab (TestServer, DevServer etc.)

*/