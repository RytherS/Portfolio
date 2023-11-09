import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
	{
		path: "",
		redirectTo: "home",
		pathMatch: "full"
	},
	{
		path: "home",
		loadChildren: () => import("./modules/home/home.module").then(m => m.HomeModule)
	},
	{
		path: "portfolio",
		loadChildren: () => import("./modules/portfolio/portfolio.module").then(m => m.PortfolioModule)
	},
	{
		path: "projectInfo",
		loadChildren: () => import("./modules/project-info/project-info.module").then(m => m.ProjectInfoModule)
	},
	{
		path: "contact",
		loadChildren: () => import("./modules/contact/contact.module").then(m => m.ContactModule)
	},
	{
		path: "about",
		loadChildren: () => import("./modules/about/about.module").then(m => m.AboutModule)
	},
	{
		path: "error",
		loadChildren: () => import("./modules/error/error.module").then(m => m.ErrorModule)
	},
	{
		path: "*",
		redirectTo: "error"
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
