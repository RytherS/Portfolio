import { AsyncPipe, KeyValuePipe, NgClass } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterSelectors } from '@core/state/router-state';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
	selector: 'sr-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	imports: [NgClass, AsyncPipe, KeyValuePipe],
})
export class HeaderComponent implements OnInit {
	private router: Router = inject(Router);
	private store: Store = inject(Store);

	public currentRootRoute$!: Observable<string>;

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

	public ngOnInit(): void {
		this.currentRootRoute$ = this.store.select(
			RouterSelectors.selectRouteRoot,
		);
	}

	public onNavTabClicked(route: string): void {
		this.router.navigate([route]);
	}

	// Sorting function for header links to remain in the order they are defined in navRouteMappings up above
	public originalOrder(): number {
		return 0;
	}
}
