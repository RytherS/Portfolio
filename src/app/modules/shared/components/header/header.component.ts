import { KeyValuePipe, NgClass } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterSelectors } from '@core/state/router-state';
import { Store } from '@ngrx/store';
import { HeaderComponentVm } from './models/header-component-vm.model';

@Component({
	selector: 'sr-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	imports: [NgClass, KeyValuePipe],
})
export class HeaderComponent {
	private router: Router = inject(Router);
	private store: Store = inject(Store);

	private currentRootRoute = this.store.selectSignal(
		RouterSelectors.selectRouteRoot,
	);

	public vm = computed<HeaderComponentVm>(() => ({
		currentRootRoute: this.currentRootRoute(),
	}));

	public readonly bracketString = '<>';

	public readonly navRouteMappings: Map<string, string> = new Map<
		string,
		string
	>([
		['/home', 'Home'],
		['/portfolio', 'Portfolio'],
		['/contact', 'Contact'],
		['/about', 'About'],
	]);

	public onNavTabClicked(route: string): void {
		this.router.navigate([route]);
	}

	// Sorting function for header links to remain in the order they are defined in navRouteMappings up above
	public originalOrder(): number {
		return 0;
	}
}
