import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalLogoComponent } from './components';

@NgModule({
  declarations: [
    PersonalLogoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalLogoComponent
  ]
})
export class PersonalLogoModule { }
