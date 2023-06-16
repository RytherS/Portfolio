import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components';
import { RouterModule } from '@angular/router';
import { PersonalLogoModule } from '../personal-logo/personal-logo.module';


@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PersonalLogoModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
