import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingSpinnerModule } from '../shared/loading-spinner/loading-spinner.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LoadingSpinnerModule
  ]
})
export class HomeModule { }
