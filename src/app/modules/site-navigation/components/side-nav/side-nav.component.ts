import { Component, ElementRef, ViewChild } from '@angular/core';
import { IconButtonComponent } from '@modules/shared/components/icon-button/icon-button.component';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'sr-side-nav',
	imports: [IconButtonComponent, CommonModule],
	templateUrl: './side-nav.component.html',
	styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
	@ViewChild('sideNav') sideNav!: ElementRef;

	public isOpen = false;
	public get isClosed() {
		return !this.isOpen;
	}

	public get toggleIconName() {
		return this.isOpen ? 'featherChevronDown' : 'featherMenu';
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
		console.log(this.sideNav);
		this.sideNav.nativeElement.style.left = '0px';
	}

	close() {
		this.isOpen = false;
		const sideNavWidth = this.sideNav.nativeElement.offsetWidth;
		this.sideNav.nativeElement.style.left = `-${sideNavWidth}px`;
	}
}
