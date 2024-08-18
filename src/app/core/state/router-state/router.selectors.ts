import { getRouterSelectors } from "@ngrx/router-store";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterState, ROUTER_FEATURE_KEY } from "./router-state.state";


export const selectRouterStateFeature = createFeatureSelector<RouterState>(ROUTER_FEATURE_KEY);

export const selectRouterState = createSelector(
	selectRouterStateFeature,
	(state) => state.routerState
);

export const {
	selectCurrentRoute, // select the current route
	selectFragment, // select the current route fragment
	selectQueryParams, // select the current route query params
	selectQueryParam, // factory function to select a query param
	selectRouteParams, // select the current route params
	selectRouteParam, // factory function to select a route param
	selectRouteData, // select the current route data
	selectUrl, // select the current url
} = getRouterSelectors(selectRouterState);


export const selectRouteRoot = createSelector(
	selectUrl, 
	(url: string) => {
		// Regex for splitting up the url at slashes
		// i.e. '/docs/setup/blahblah?something=someValue' -> ['/docs', '/setup', '/blahblah']
		// Selecting the first index of this list will then be the root of the current route (i.e. '/docs')
		const root = (url.match(/\/[A-z]*(?=[/?])?/) ?? [""])[0];
		return root;
	}
);