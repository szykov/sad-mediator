import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'search',
		loadChildren: (): Promise<unknown> => import('./modules/search/search.module').then((m) => m.SearchModule),
		data: { preload: true }
	},
	{
		path: 'extra',
		loadChildren: (): Promise<unknown> => import('./modules/extra/extra.module').then((m) => m.ExtraModule)
	},
	{ path: '', redirectTo: '/search', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
