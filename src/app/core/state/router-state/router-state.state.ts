import { RouterReducerState } from "@ngrx/router-store";


export const ROUTER_FEATURE_KEY = "router";

export interface RouterState {
    routerState: RouterReducerState;
}