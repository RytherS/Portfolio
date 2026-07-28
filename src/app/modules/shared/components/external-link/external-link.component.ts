import { Component, Input } from '@angular/core';

@Component({
  selector: 'sr-external-link',
  imports: [],
  templateUrl: './external-link.component.html',
  styleUrl: './external-link.component.scss',
})
export class ExternalLinkComponent {
  @Input() href: string = '';
}
