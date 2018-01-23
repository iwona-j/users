import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';

import { ApiService } from './../../core/api.service';
import {User} from './../shared/user.model';

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
  private sub: any;


  constructor(route: ActivatedRoute, apiService: ApiService) {
    this.sub = route.params.subscribe(params => {
    //    this.id = params.id; 

    //    apiService.getUser(this.id).subscribe(
    //      (user: User) => {
    //       console.log(user)
    //       this.user = user;

    //       this.latitude = parseFloat(this.user.latitude);
    //       this.longitude = parseFloat(this.user.longitude);
    //     },
    //     // the second argument is a function which runs on error
    //     err => console.error(err),
    //     // the third argument is a function which runs on completion
    //     () => console.log('done loading user')
    //   );
  
       //get user data from api

       this.user = {
        "_id": "5728799d89f5e06d069ccc7a",
        "index": 0,
        "guid": "deded478-6c03-4b46-a6e0-f59908ce6fa9",
        "isActive": true,
        "balance": "$3,085.61",
        "picture": "http://placehold.it/32x32",
        "age": 28,
        "eyeColor": "green",
        "name": {
          "first": "Barlow",
          "last": "Moore"
        },
        "company": "KONNECT",
        "email": "barlow.moore@konnect.tv",
        "phone": "+1 (837) 514-2845",
        "address": "12901 Cantrell, Little Rock, Arkansas 72227",
        "about": "Dolor culpa ullamco voluptate proident adipisicing est velit ex sint. Eu mollit in laborum consequat do cillum qui exercitation culpa ipsum do dolor consectetur quis. Eiusmod qui aliquip eiusmod velit esse nisi ut amet.",
        "registered": "Sunday, January 19, 2014 1:57 AM",
        "latitude": "-84.63438",
        "longitude": "17.604834",
        "tags": [
          "irure",
          "irure",
          "aliqua",
          "sint",
          "veniam"
        ],
        "range": [
          0,
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9
        ],
        "friends": [
          {
            "id": 0,
            "name": "Claudine Russo"
          },
          {
            "id": 1,
            "name": "Valdez Christian"
          },
          {
            "id": 2,
            "name": "Jannie Horton"
          }
        ],
        "greeting": "Hello, Barlow! You have 8 unread messages.",
        "favoriteFruit": "apple"
      }
      
    });
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
