import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { RouterStateModule } from './router-state';

@NgModule({
	imports: [
		CommonModule,
		RouterStateModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot(),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
			logOnly: false,
		}),
	],
})
export class AppStateModule {}
