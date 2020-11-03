import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SearchProvider } from 'src/app/shared/common';

import { IProvider, ISearchQuery } from 'src/app/shared/interfaces';

@Component({
	selector: 'sad-search-form',
	templateUrl: './search-form.component.html',
	styleUrls: ['./search-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchFormComponentComponent implements OnInit {
	@Input() providers: IProvider;
	@Input() model: ISearchQuery;

	public formGroup: FormGroup;

	@Output() submit = new EventEmitter<ISearchQuery>();

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.formGroup = this.fb.group({
			search: [this.model.search],
			provider: [this.model.provider]
		});
	}

	public onSearchChange = (search: string) => this.submit.emit({ search });

	public onProviderChange = (provider: SearchProvider) => this.submit.emit({ provider });
}
