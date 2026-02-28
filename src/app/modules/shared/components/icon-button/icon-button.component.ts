import { Component, Input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
	selector: 'sr-icon-button',
	templateUrl: './icon-button.component.html',
	styleUrl: './icon-button.component.scss',
	imports: [NgTemplateOutlet, IconComponent],
})
export class IconButtonComponent {
	@Input() iconName: string = IconComponent.defaultIcon;
	@Input() href: string | null = null;
}
