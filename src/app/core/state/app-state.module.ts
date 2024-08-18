import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { RouterStateModule } from "./router-state";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";


@NgModule({
	imports: [
        CommonModule,
		RouterStateModule,
		StoreModule.forRoot({}),
		EffectsModule.forRoot(),
        StoreDevtoolsModule.instrument({
            maxAge: 25,
            logOnly: false,
          })
	],
})
export class AppStateModule {}