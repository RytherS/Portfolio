import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppStateModule } from '@core/state/app-state.module';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
	providers: [
		importProvidersFrom(BrowserModule, AppRoutingModule, AppStateModule),
	],
}).catch((err) => console.error(err));
