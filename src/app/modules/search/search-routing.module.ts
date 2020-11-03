import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BingComponent } from './containers/bing/bing.component';
import { GoogleComponent } from './containers/google/google.component';
import { SearchShellComponent } from './containers/search-shell/search-shell.component';

const routes: Routes = [
	{
		path: '',
		component: SearchShellComponent,
		children: [
			{ path: 'bing', component: BingComponent },
			{ path: 'google', component: GoogleComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class SearchRoutingModule {}
