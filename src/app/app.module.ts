import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './modules';
import { AppStateModule } from '@core/state/app-state.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
	AppStateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
