import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { SearchProvider } from '../shared/common';
import { ISearchQuery } from '../shared/interfaces';

@Injectable({
	providedIn: 'root'
})
export class SearchStateService {
	private state$ = new BehaviorSubject<ISearchQuery>({ search: '', provider: SearchProvider.Google, lucky: false });

	public set(query: ISearchQuery): void {
		this.state$.next({ ...this.state$.value, ...query });
	}

	public get = (): Observable<ISearchQuery> => this.state$.asObservable();

	public get value() {
		return this.state$.value;
	}

	constructor() {}
}
