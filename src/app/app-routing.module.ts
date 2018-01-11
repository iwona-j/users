import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Error404Component } from './core/error-404/error-404.component';


const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: '', component: AppComponent},
  {path: 'users', loadChildren: 'app/users/users.module#UsersModule'},
  {path: '404', component: Error404Component},

  // otherwise redirect to 404
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
