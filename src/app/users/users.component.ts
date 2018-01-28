import { Component, OnInit } from '@angular/core';

import { fadeInAnimation } from './../core/animations/fade-in.animation';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  animations: [fadeInAnimation]
})
export class UsersComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }
  
  public getRouterOutletState(outlet): void {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}
