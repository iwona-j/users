import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNamePipe } from './pipes/user-name.pipe';
import { ApiService } from './api.service';
import { SearchByNamePipe } from './pipes/search-by-name.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    UserNamePipe,
    SearchByNamePipe,
  ],
  providers: [
    ApiService,
  ],
  exports: [
    UserNamePipe,
    SearchByNamePipe
  ]
})
export class CoreModule { }
