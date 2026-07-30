import { Component } from '@angular/core';
import {
	ContentCardComponent,
	HighlightComponent,
	ResponsiveComponent,
} from '@modules/shared/components';
import { MediaConfiguration } from '@modules/shared/models';

@Component({
	selector: 'sr-about',
	templateUrl: './about.component.html',
	styleUrls: ['./about.component.scss'],
	imports: [ContentCardComponent, HighlightComponent],
})
export class AboutComponent extends ResponsiveComponent {
	neumontMediaConfig = <MediaConfiguration>{
		srcUrl: 'assets/images/NeumontUniversity.JPG',
		altText: `A historic brick building with large windows viewed from the perspective of
            someone looking almost straight up from the sidewalk late at night.
            A cream-colored flag labeled "Neumont" attached to the outside wall just above the first floor 
            waves gently in the breeze.`,
	};

	redwoodMediaConfig = <MediaConfiguration>{
		srcUrl: 'assets/images/RedwoodHorseRide.jpeg',
		altText: `Sebastian sitting quite majestically atop a horse in the lush Redwood Forest in northern California.
            Him and his valiant steed stand in front of a massive tree that was hollowed out by a fire long ago.`,
	};

	motorcycleMediaConfig = <MediaConfiguration>{
		srcUrl: 'assets/images/Motorcycle.jpg',
		altText: `Sebastian's dope black motorcycle parked in his driveway with some tools strewn about.
            A new cargo rack, saddlebag, and improved leather-colored seat have been attached, and it looks
            ready to go on a camping trip!`,
	};

	gameRoomMediaConfig = <MediaConfiguration>{
		srcUrl: 'assets/images/GameRoom.jpg',
		altText: `Sebastian's cozy game room.
            Several shelves filled with PlayStation and Wii games on the wall are decorated to look like Mario platforms.
            A television stand set up with a Super Nintendo is turned on to show the Super Metriod attract screen.`,
	};
}
