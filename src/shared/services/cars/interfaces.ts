import { ICarsResponse } from '@shared/interfaces';

export interface ICars {
	listCars: () => Promise<ICarsResponse>;
}
