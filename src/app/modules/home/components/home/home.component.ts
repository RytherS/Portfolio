import { Component } from '@angular/core';
import {
	ContentCardComponent,
	IconButtonComponent,
} from '@modules/shared/components';

@Component({
	selector: 'sr-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	imports: [ContentCardComponent, IconButtonComponent],
})
export class HomeComponent {
	public testClick() {
		console.log('Button clicked!');
	}
}
