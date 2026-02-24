import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components';


const routes: Routes = [
	{
		path: '',
		loadComponent: () => import('./components/error/error.component').then(mod => mod.ErrorComponent)
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorRoutingModule { }
