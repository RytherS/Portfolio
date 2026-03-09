import { KeyValuePipe, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { IconComponent } from '@modules/shared/components/icon/icon.component';
import { IconButtonComponent } from '@modules/shared/components/icon-button/icon-button.component';
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
