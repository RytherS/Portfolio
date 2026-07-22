import { computed, inject } from '@angular/core';
import { NavRouteConstants } from '../constants';
import { RouterSelectors } from '@core/state/router-state';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ResponsiveComponent } from '@modules/shared/components';

interface BaseNavigationComponentVm {
	currentRootRoute: string;
	navRouteMappings: Map<string, string>;
	isMobileScreen: boolean;
}

export abstract class BaseNavigationComponent extends ResponsiveComponent {
	private router: Router = inject(Router);
	private store: Store = inject(Store);

	private currentRootRoute = this.store.selectSignal(
		RouterSelectors.selectRouteRoot,
	);

	public vm = computed<BaseNavigationComponentVm>(() => ({
		currentRootRoute: this.currentRootRoute(),
		navRouteMappings: NavRouteConstants.navRouteMappings,
		isMobileScreen: this.isMobileScreen(),
	}));

	public navigateToRoute(route: string): void {
		this.router.navigate([route]);
	}

	public originalOrder = (): number => {
		return 0;
	};
}
