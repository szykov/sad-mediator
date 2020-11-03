import { SearchProvider } from '../common';

export interface ISearchQuery {
	search?: string;
	provider?: SearchProvider;
	lucky?: boolean;
}
