import instance from '../axios.config';

import { ICarsResponse } from '@shared/interfaces';

import { ICars } from './interfaces';

const carsServices = (): ICars => {
	async function listCars(): Promise<ICarsResponse> {
		return instance.get('/cars.json');
	}

	return { listCars };
};

export default carsServices;
