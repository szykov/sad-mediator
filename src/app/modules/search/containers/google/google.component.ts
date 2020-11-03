import { Component, OnInit } from '@angular/core';

import { SearchStateService } from 'src/app/services';

@Component({
	templateUrl: './google.component.html'
})
export class GoogleComponent implements OnInit {
	public input: string;

	constructor(private searchState: SearchStateService) {
		this.searchState.get().subscribe((result) => (this.input = result.search));
	}

	ngOnInit(): void {}
}
