import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
	},
	{
		path: 'home',
		loadChildren: () =>
			import('./modules/home/home-routing.module').then((m) => m.HomeRoutingModule),
	},
	{
		path: 'portfolio',
		loadChildren: () =>
			import('./modules/portfolio/portfolio-routing.module').then(
				(m) => m.PortfolioRoutingModule,
			),
	},
	{
		path: 'projectInfo',
		loadChildren: () =>
			import('./modules/project-info/project-info-routing.module').then(
				(m) => m.ProjectInfoRoutingModule,
			),
	},
	{
		path: 'contact',
		loadChildren: () =>
			import('./modules/contact/contact-routing.module').then(
				(m) => m.ContactRoutingModule,
			),
	},
	{
		path: 'about',
		loadChildren: () =>
			import('./modules/about/about-routing.module').then((m) => m.AboutRoutingModule),
		pathMatch: 'prefix',
	},
	{
		path: 'error',
		loadChildren: () =>
			import('./modules/error/error-routing.module').then((m) => m.ErrorRoutingModule),
	},
	{
		path: '**',
		redirectTo: 'error',
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
