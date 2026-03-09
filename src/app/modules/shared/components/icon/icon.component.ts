import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { srIcons } from './icons';

@Component({
	selector: 'sr-icon',
	templateUrl: './icon.component.html',
	styleUrl: './icon.component.scss',
	imports: [NgIcon],
	viewProviders: [provideIcons(srIcons)],
})
export class IconComponent {
	public static readonly defaultIcon = 'featherSquare';

	@Input() iconName: string = IconComponent.defaultIcon;
}
