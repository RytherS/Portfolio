import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerComponent } from './components';


@NgModule({
  declarations: [
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoadingSpinnerComponent
  ]
})
export class LoadingSpinnerModule { }
