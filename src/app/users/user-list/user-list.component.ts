import { Component, OnInit } from '@angular/core';
import { Subscription } from "rxjs/Subscription";
import { Router } from '@angular/router';

import { ApiService } from './../../core/api.service';
import { User } from './../shared/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users = Array<User>();
  query: string = '';
  loading: boolean = false;
  private sub: Subscription;

  constructor(private ApiService: ApiService, private router: Router) {
    this.getUserList();
  }

  ngOnInit() {
  }

  getUserList (): void {
    this.loading = true;
    this.sub = this.ApiService.getUsers().subscribe(
      (users: Array<User>) => {
        this.users = users.sort((a, b) => {
          return b.age - a.age;
        });
      },
      err => {
        console.error(err)
        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  goToUserDetails (guid: string): void {
    this.router.navigate(['users/' + guid]);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
