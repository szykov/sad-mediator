import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';

import { SearchShellComponent } from './containers/search-shell/search-shell.component';
import { SearchFormComponentComponent } from './components/search-form/search-form.component';
import { BingComponent } from './containers/bing/bing.component';
import { GoogleComponent } from './containers/google/google.component';

@NgModule({
	declarations: [SearchShellComponent, SearchFormComponentComponent, BingComponent, GoogleComponent],
	imports: [CommonModule, SharedModule, SearchRoutingModule]
})
export class SearchModule {}
