import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { AppComponent } from './app.component';
import { Error404Component } from './core/error-404/error-404.component';


@NgModule({
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    Error404Component, 
    FooterComponent, 
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
