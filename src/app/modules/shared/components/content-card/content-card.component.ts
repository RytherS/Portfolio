import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ResponsiveComponent } from '../responsive/responsive.component';

@Component({
	selector: 'sr-content-card',
	imports: [CommonModule],
	templateUrl: './content-card.component.html',
	styleUrl: './content-card.component.scss',
})
export class ContentCardComponent extends ResponsiveComponent {
	@Input() title: string = '';
	@Input() image: string = '';
	@Input() imagePosition: 'left' | 'right' = 'left';
}
