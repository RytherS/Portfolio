import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { ProjectInfoRoutingModule } from './project-info-routing.module';

@NgModule({
	imports: [CommonModule, ProjectInfoRoutingModule, ProjectInfoComponent],
})
export class ProjectInfoModule {}
