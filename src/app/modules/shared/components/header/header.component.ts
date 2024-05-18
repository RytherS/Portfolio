import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'sr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private router: Router = inject(Router)

  public readonly bracketString = '<>'

  public readonly navRouteMappings: Map<string, string> = new Map<string, string>([
    [ '/home', 'Home' ],
    [ '/portfolio', 'Portfolio' ],
    [ '/contact', 'Contact' ],
    [ '/about', 'About' ],
  ]);

  public onNavTabClicked(route: string): void {
    this.router.navigate([route])
  }
}
