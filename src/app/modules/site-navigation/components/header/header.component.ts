import { KeyValuePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { IconButtonComponent, IconComponent } from '@modules/shared/components';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { BaseNavigationComponent } from '../base-navigation-component';

@Component({
	selector: 'sr-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss', '../_shared-nav-styling.scss'],
	imports: [
		NgClass,
		KeyValuePipe,
		IconComponent,
		IconButtonComponent,
		SideNavComponent,
	],
})
export class HeaderComponent extends BaseNavigationComponent {}
