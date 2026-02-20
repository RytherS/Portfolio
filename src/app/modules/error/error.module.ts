import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorComponent } from './components/error/error.component';
import { ErrorRoutingModule } from './error-routing.module';


@NgModule({
    imports: [
        CommonModule,
        ErrorRoutingModule,
        ErrorComponent
    ]
})
export class ErrorModule { }
