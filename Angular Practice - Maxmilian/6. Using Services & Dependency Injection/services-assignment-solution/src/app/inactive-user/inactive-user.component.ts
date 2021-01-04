import { UserService } from '../user.service';
import { Component, OnInit } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css']
})
export class InactiveUserComponent implements OnInit {
  users: string[];

  constructor(private userServ: UserService, public counter: CounterService) { }

  ngOnInit() {
    this.users = this.userServ.inactiveUsers;
  }

  toActive(id: number) {
    this.userServ.makeActive(id);
  }

}
