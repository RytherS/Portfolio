import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioComponent } from './components';
import { PortfolioRoutingModule } from './portfolio-routing.module';

@NgModule({
	imports: [CommonModule, PortfolioRoutingModule, PortfolioComponent],
})
export class PortfolioModule {}
