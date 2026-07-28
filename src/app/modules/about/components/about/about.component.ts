import { Component } from '@angular/core';
import {
	ContentCardComponent,
	HighlightComponent,
	ResponsiveComponent,
} from '@modules/shared/components';

@Component({
	selector: 'sr-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
	imports: [ContentCardComponent, HighlightComponent],
})
export class AboutComponent extends ResponsiveComponent {}
