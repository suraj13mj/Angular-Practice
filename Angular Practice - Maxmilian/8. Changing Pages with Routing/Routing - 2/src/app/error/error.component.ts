import { ActivatedRoute, Data } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit{

  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe(

      //we need to import Data from router module
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )
  }
}





/* #NOTES

1. Earlier we looked at how to get data i.e how to get a parameter, queryString and Fragment data from the URL.
  - Basically even these are data that are passed to the route statically or dynamically.
  - But these are used to configure the component when the route gets loaded, based on that parameters, queryString and Fragment data.

2. Angular also provides us with a data property that can passed with route and can be fetched when the route gets loaded.
  - This data can be used for any logic related purposes.

3. We can pass static data (pre-defined) using this data property.

4. Here in the example, we fetch the errorMessage property using the data property from the route.
  
  1. Firstly we must define the data property while defining the route for this ErrorComponent in the app-routing.module.ts
    - This data property takes the JS object, where we can define multipe data to passes using key value pairs.
  
  2. To access the data when the route get's loaded.
    - We need to inject the ActivatedRoute service to access the current route.
    - Then we can access it using snapshot or subscribing to the observable (if there is chance that data may change when component is reloaded from within the component).
   


5. It can argued that if static data is to be passed then we can directly define it within the component.
  - But there might be multiple routes accessing this component by passing different data (Thus can be re-used),
  - Thus Components can be re-used by different routes, by passing different data

*/