import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { RouterState } from './router-state.state';

export const routerStateReducer: ActionReducerMap<RouterState> = {
	routerState: routerReducer,
};
