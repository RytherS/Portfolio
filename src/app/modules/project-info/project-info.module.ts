import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectInfoRoutingModule } from './project-info-routing.module';
import { ProjectInfoComponent } from './components/project-info/project-info.component';


@NgModule({
  declarations: [
    ProjectInfoComponent
  ],
  imports: [
    CommonModule,
    ProjectInfoRoutingModule
  ]
})
export class ProjectInfoModule { }
