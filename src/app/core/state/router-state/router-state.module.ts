import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { routerStateReducer } from "./router-state.reducer";
import { ROUTER_FEATURE_KEY } from "./router-state.state";
import { StoreRouterConnectingModule } from "@ngrx/router-store";


@NgModule({
	imports: [
		CommonModule,
		StoreModule.forFeature(ROUTER_FEATURE_KEY, routerStateReducer),
		StoreRouterConnectingModule.forRoot({
			stateKey: ROUTER_FEATURE_KEY,
		}),
	],
})
export class RouterStateModule {}