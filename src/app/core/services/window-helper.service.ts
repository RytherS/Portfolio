import { computed, Injectable, signal } from '@angular/core';

@Injectable({
	providedIn: 'root',
})
export class WindowHelperService {
	static readonly MOBILE_BREAKPOINT = 800;

	public screenWidth = signal(window.innerWidth);

	public isMobileScreen = computed(
		() => this.screenWidth() <= WindowHelperService.MOBILE_BREAKPOINT,
	);
	public isDesktopScreen = computed(() => !this.isMobileScreen());

	constructor() {
		// Listen for window resize events and trigger change detection if necessary
		window.addEventListener('resize', () => {
			this.screenWidth.set(window.innerWidth);
		});
	}
}
