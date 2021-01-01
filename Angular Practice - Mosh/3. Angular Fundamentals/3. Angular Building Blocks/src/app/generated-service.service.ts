import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeneratedServiceService {

  constructor() { }
}



/*
1. We can generate a service using "ng g s ServiceName"

2. Here in this GeneratedService we see a decorator called Injectable.

3. This is added because, suppose the GeneratedServiceService constructor has a dependency, that needs to be injected.
  - The dependency may be another service.
  - The @Injectable decorator indicates that, this class is a injectable i.e dependencies can be injected.

4. We do not add this @Injectable decorator in our component where dependencies are injected to the constructor 
  - because @Component decorator bydef includes this @Injectable

*/
