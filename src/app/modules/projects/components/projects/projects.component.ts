import { Component } from '@angular/core';
import {
	ContentCardComponent,
	HighlightComponent,
	ExternalLinkComponent,
} from '@modules/shared/components';
import { MediaConfiguration } from '@modules/shared/models';

@Component({
	selector: 'sr-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss'],
	imports: [ContentCardComponent, HighlightComponent, ExternalLinkComponent],
})
export class ProjectsComponent {
	personalSetupMediaConfig = <MediaConfiguration>{
		srcUrl: 'assets/images/PersonalSetup.jpg',
		altText: `Sebastian's radical and cozy personal computer setup.
            He has this website's local development environment pulled up on his two monitors.`,
	};

	oceanWasteGameMediaConfig = <MediaConfiguration>{
		srcUrl: 'assets/images/OceanWasteGame.png',
		altText: `The main menu of an educational game on display at the Long Island Children's Museum.
            There are several stylized fish swimming behind a splash screen displaying the title and a large start button.`,
	};

	spectreMediaConfig = <MediaConfiguration>{
		srcUrl: 'assets/images/Spectre3d_Logo.png',
		altText: `The Spectre 3D logo, featuring several small circles with a left-to-right light-blue 
            to dark-blue gradient arranged to look like they are comprising a larger three-dimensional sphere.`,
	};
}
