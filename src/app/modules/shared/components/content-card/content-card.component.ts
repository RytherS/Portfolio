import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResponsiveComponent } from '../responsive/responsive.component';
import { MediaConfiguration } from '@modules/shared/models';

@Component({
	selector: 'sr-content-card',
	imports: [CommonModule],
	templateUrl: './content-card.component.html',
	styleUrl: './content-card.component.scss',
})
export class ContentCardComponent extends ResponsiveComponent {
	@Input() title: string = '';
	@Input() mediaConfig: MediaConfiguration | null = null;
	@Input() mediaPosition: 'left' | 'right' = 'left';
}
