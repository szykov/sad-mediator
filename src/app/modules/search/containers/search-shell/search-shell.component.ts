import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SearchStateService } from 'src/app/services/search-state.service';
import { SearchProvider } from 'src/app/shared/common';
import { IProvider, ISearchQuery } from 'src/app/shared/interfaces';

@Component({
	templateUrl: './search-shell.component.html'
})
export class SearchShellComponent implements OnInit {
	public searchQuery$: Observable<ISearchQuery>;
	public providers: IProvider[] = [
		{ value: SearchProvider.Google, description: 'Google' },
		{ value: SearchProvider.Bing, description: 'Bing' }
	];

	constructor(private router: Router, private route: ActivatedRoute, private searchState: SearchStateService) {
		this.searchQuery$ = this.searchState.get();
	}

	ngOnInit(): void {
		this.searchState.get().subscribe(({ provider }) => {
			switch (provider) {
				case SearchProvider.Bing:
					this.router.navigate(['bing'], { relativeTo: this.route });
					break;

				case SearchProvider.Google:
					this.router.navigate(['google'], { relativeTo: this.route });
					break;

				default:
					throw new Error('Not supported Provider');
			}
		});
	}

	public onSubmit(query: ISearchQuery) {
		this.searchState.set(query);
	}
}
