import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from "rxjs/Subscription";
import { ActivatedRoute } from '@angular/router';

import { ApiService } from './../../core/api.service';
import { User } from './../shared/user.model';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  id: string;
  user: User;
  latitude: number;
  longitude: number;
  loading: boolean = false;
  private sub: Subscription;

  constructor(route: ActivatedRoute, apiService: ApiService) {
    this.loading = true;
    this.sub = route.params.subscribe(params => {
       this.id = params.id; 

       apiService.getUser(this.id).subscribe(
         (user: User) => {
          this.user = user;

          this.latitude = parseFloat(this.user.latitude);
          this.longitude = parseFloat(this.user.longitude);
          this.loading = false;
        },
        err => {
          console.error(err)
          this.loading = false;
        }
      );
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
