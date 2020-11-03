import { Component, OnInit } from '@angular/core';
import { SearchStateService } from 'src/app/services';

@Component({
	selector: 'sad-extra-shell',
	templateUrl: './extra-shell.component.html'
})
export class ExtraShellComponent implements OnInit {
	public lucky: boolean;

	constructor(private searchState: SearchStateService) {}

	ngOnInit(): void {
		this.searchState.get().subscribe(({ lucky }) => (this.lucky = lucky));
	}

	public onLuckyChange = (lucky: boolean) => this.searchState.set({ lucky });
}
