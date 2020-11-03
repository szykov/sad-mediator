import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExtraRoutingModule } from './extra-routing.module';
import { ExtraShellComponent } from './containers/extra-shell/extra-shell.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	declarations: [ExtraShellComponent],
	imports: [CommonModule, SharedModule, ExtraRoutingModule]
})
export class ExtraModule {}
