import { computed, inject } from '@angular/core';
import { NavRouteConstants } from '../constants';
import { RouterSelectors } from '@core/state/router-state';
import { WindowHelperService } from '@core/services/window-helper.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

interface BaseNavigationComponentVm {
	currentRootRoute: string;
	navRouteMappings: Map<string, string>;
	isMobileScreen: boolean;
}

export abstract class BaseNavigationComponent {
	private router: Router = inject(Router);
	private store: Store = inject(Store);
	private windowHelper: WindowHelperService = inject(WindowHelperService);

	private currentRootRoute = this.store.selectSignal(
		RouterSelectors.selectRouteRoot,
	);

	public vm = computed<BaseNavigationComponentVm>(() => ({
		currentRootRoute: this.currentRootRoute(),
		navRouteMappings: NavRouteConstants.navRouteMappings,
		isMobileScreen: this.windowHelper.isMobileScreen(),
	}));

	public navigateToRoute(route: string): void {
		this.router.navigate([route]);
	}

	public originalOrder = (): number => {
		return 0;
	};
}
