import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css']
})
export class ActiveUserComponent implements OnInit {
  users: string[];
  constructor(private userServ: UserService, public counter: CounterService) { }

  ngOnInit() {
    this.users = this.userServ.activeUsers;
  }

  toInActive(id: number) {
    this.userServ.makeInactive(id);
  }

}
