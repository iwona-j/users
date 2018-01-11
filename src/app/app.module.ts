;
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { UserListComponent } from './users/user-list/user-list.component';
// import { UserDetailsComponent } from './users/user-details/user-details.component';
import { Error404Component } from './core/error-404/error-404.component';


@NgModule({
  declarations: [
    AppComponent,
    // UserListComponent,
    // UserDetailsComponent,
    Error404Component, 
    FooterComponent, 
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
