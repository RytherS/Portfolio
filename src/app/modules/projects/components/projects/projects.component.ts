import { Component } from '@angular/core';
import {
	ContentCardComponent,
	HighlightComponent,
	ExternalLinkComponent
} from '@modules/shared/components';

@Component({
	selector: 'sr-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
	imports: [ContentCardComponent, HighlightComponent, ExternalLinkComponent],
})
export class ProjectsComponent {}
