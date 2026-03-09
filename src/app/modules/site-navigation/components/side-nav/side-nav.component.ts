import { Component, ElementRef, ViewChild } from '@angular/core';
import { IconButtonComponent, IconComponent } from '@modules/shared/components';
import { CommonModule } from '@angular/common';
import { BaseNavigationComponent } from '../base-navigation-component';

@Component({
	selector: 'sr-side-nav',
	imports: [IconButtonComponent, IconComponent, CommonModule],
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.scss', '../_shared-nav-styling.scss'],
})
export class SideNavComponent extends BaseNavigationComponent {
	@ViewChild('sideNav') sideNav!: ElementRef;

	public isOpen = false;
	public get isClosed() {
		return !this.isOpen;
	}

	toggleSideNav() {
		if (this.isOpen) {
			this.close();
		} else {
			this.open();
		}
	}

	open() {
		this.isOpen = true;
		this.sideNav.nativeElement.style.left = '0px';
	}

	close() {
		this.isOpen = false;
		const sideNavWidth = this.sideNav.nativeElement.offsetWidth;
		this.sideNav.nativeElement.style.left = `-${sideNavWidth}px`;
	}

	override navigateToRoute(route: string): void {
		super.navigateToRoute(route);
		this.close();
	}
}
