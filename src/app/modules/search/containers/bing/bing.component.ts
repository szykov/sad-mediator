import { Component, OnInit } from '@angular/core';

import { SearchStateService } from 'src/app/services';

@Component({
	templateUrl: './bing.component.html'
})
export class BingComponent implements OnInit {
	public input: string;

	constructor(private searchState: SearchStateService) {
		this.searchState.get().subscribe(({ search }) => (this.input = search));
	}

	ngOnInit(): void {}
}
