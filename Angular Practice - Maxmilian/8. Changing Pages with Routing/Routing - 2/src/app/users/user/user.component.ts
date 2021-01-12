import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private presentRoute: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.presentRoute.snapshot.params['id'],
      name: this.presentRoute.snapshot.params['name']
    }
    
  }

}
