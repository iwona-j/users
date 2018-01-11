import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../core/api.service';
import { User } from './../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = Array<User>();

  constructor(private ApiService: ApiService) { }

  ngOnInit() {
  }

  getUserList () {
      this.ApiService.getUsers().subscribe((users: Array<User>) => {
        console.log(users)
        this.users = users.sort((a, b) => {
          return b.age - a.age;
        });
      });
  }

}
