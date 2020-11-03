import { Component, OnInit } from '@angular/core';
import { SearchStateService } from './services';
import { ISearchQuery } from './shared/interfaces';

@Component({
	selector: 'sad-root',
	templateUrl: 'app.component.html',
	styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
	public state: ISearchQuery;

	constructor(private searchState: SearchStateService) {}

	ngOnInit(): void {
		this.searchState.get().subscribe((query) => (this.state = query));
	}
}
