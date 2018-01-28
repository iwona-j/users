import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserNamePipe } from './pipes/user-name.pipe';
import { ApiService } from './api.service';
import { SearchPipe } from './pipes/search.pipe';
import { UniquePipe } from './pipes/unique.pipe';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PreloaderComponent } from './preloader/preloader.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserNamePipe,
    SearchPipe,
    UniquePipe,
    PreloaderComponent,
  ],
  providers: [
    ApiService,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    UserNamePipe,
    SearchPipe,
    UniquePipe
  ]
})
export class CoreModule {}
