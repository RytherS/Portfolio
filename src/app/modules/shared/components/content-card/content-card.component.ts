import { CommonModule } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { WindowHelperService } from '@core/services/window-helper.service';

interface ContentCardComponentVm {
	isMobileScreen: boolean;
	title: string;
	image: string;
	imagePosition: 'left' | 'right';
}

@Component({
	selector: 'sr-content-card',
	imports: [CommonModule],
	templateUrl: './content-card.component.html',
	styleUrl: './content-card.component.scss',
})
export class ContentCardComponent {
	@Input() title: string = '';
	@Input() image: string = '';
	@Input() imagePosition: 'left' | 'right' = 'left';

	private windowHelperService: WindowHelperService =
		inject(WindowHelperService);

	public vm = computed<ContentCardComponentVm>(() => ({
		isMobileScreen: this.windowHelperService.isMobileScreen(),
		title: this.title,
		image: this.image,
		imagePosition: this.imagePosition,
	}));
}
