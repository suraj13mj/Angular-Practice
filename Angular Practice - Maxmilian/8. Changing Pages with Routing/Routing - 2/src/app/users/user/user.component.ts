import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number, name: string };
  subscribedParams: Subscription;

  constructor(private presentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.presentRoute.snapshot.params['id'],
      name: this.presentRoute.snapshot.params['name']
    }
    
    this.subscribedParams = this.presentRoute.params.subscribe(
      (params: Params) => {
        this.user.id = params.id;
        this.user.name = params.name;
      }
    )
  }

  ngOnDestroy() {
    this.subscribedParams.unsubscribe();
  }

}
