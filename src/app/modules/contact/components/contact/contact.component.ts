import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
	ContentCardComponent,
	IconButtonComponent,
	IconComponent,
	ResponsiveComponent,
} from '@modules/shared/components';

@Component({
	selector: 'sr-contact',
	templateUrl: './contact.component.html',
	styleUrls: ['./contact.component.scss'],
	imports: [
		CommonModule,
		ContentCardComponent,
		IconComponent,
		IconButtonComponent,
	],
})
export class ContactComponent extends ResponsiveComponent {}
