import { Directive, inject } from '@angular/core';
import { WindowHelperService } from '@core/services/window-helper.service';

@Directive()
export abstract class ResponsiveComponent {
	protected windowHelperService: WindowHelperService =
		inject(WindowHelperService);

	public isMobileScreen() {
		return this.windowHelperService.isMobileScreen();
	}
}
