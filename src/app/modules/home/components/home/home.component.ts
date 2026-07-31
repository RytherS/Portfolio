import { Component } from '@angular/core';
import {
	ContentCardComponent,
	IconButtonComponent,
} from '@modules/shared/components';
import { MediaConfiguration } from '@modules/shared/models';

@Component({
	selector: 'sr-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
	imports: [ContentCardComponent, IconButtonComponent],
})
export class HomeComponent {
	pfpMediaConfig = <MediaConfiguration>{
		srcUrl: 'assets/images/PFP.jpg',
		altText: `Sebastian Ryther's headshot.
            He is a handsome young man (if I do say so myself) with well-groomed ginger hair and a
            kind smile standing in front of a large monstera plant.`,
	};
}
