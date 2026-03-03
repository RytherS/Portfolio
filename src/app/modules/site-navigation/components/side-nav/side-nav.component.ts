import { Component } from '@angular/core';
import { IconButtonComponent } from '@modules/shared/components/icon-button/icon-button.component';

@Component({
	selector: 'sr-side-nav',
	imports: [IconButtonComponent],
	templateUrl: './side-nav.component.html',
	styleUrl: './side-nav.component.scss',
})
export class SideNavComponent {
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
	}

	close() {
		this.isOpen = false;
	}
}
