import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';

import { UserRoutingModule } from './users.routing.module';
import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { CoreModule } from './../core/core.module';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    UserRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjL2PT25PDYV-f5WrnRZWeDRcgdoQNuFU'
    }),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    UsersComponent,
    UserListComponent,
    UserDetailsComponent,
  ],
  
})
export class UsersModule {}
