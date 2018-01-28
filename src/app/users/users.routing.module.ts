import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users.component';

const useresRoutes: Routes = [
  {
    path: '',
    component: UsersComponent,
    children: [
      {path: '', component: UserListComponent},
      {path: ':id', component: UserDetailsComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(useresRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class UserRoutingModule {
}
