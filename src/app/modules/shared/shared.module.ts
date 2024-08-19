import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import {
  HeaderComponent,
  LoadingSpinnerComponent
} from './components';


@NgModule({
  declarations: [
    HeaderComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LoadingSpinnerComponent
  ]
})
export class SharedModule { }
