import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './users.routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent} from './user-details/user-details.component';

import { ApiService } from './../core/api.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailsComponent
  ],
  providers: [
    ApiService
  ]
})
export class UsersModule { }
