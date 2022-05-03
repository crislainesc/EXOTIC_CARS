import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICarsResponse } from '@shared/interfaces';

import { carsServices } from '@shared/services';

import { CarsSlice } from '@shared/types';

const { listCars } = carsServices();

const data = { ...localStorage };

const initialCarsState: CarsSlice = {
	list: JSON.parse(data.cars),
	currentCar: JSON.parse(data.currentCar)[0],
};

const carsSlice = createSlice({
	name: 'cars',

	initialState: initialCarsState,

	reducers: {
		addCars: (state, action: PayloadAction<ICarsResponse>) => {
			state.list = action.payload.cars;
			localStorage.setItem('cars', JSON.stringify(action.payload.cars));
		},

		selectCar: (state, action: PayloadAction<number>) => {
			state.currentCar = state.list.filter(
				(car: any) => car.id === action.payload
			)!;
			localStorage.setItem('currentCar', JSON.stringify(state.currentCar));
		},
	},

	extraReducers: (builder) => {
		builder.addCase(
			asyncAddCars.fulfilled,
			(state, action: PayloadAction<ICarsResponse>) => {
				state.list = action.payload.cars;
				localStorage.setItem('cars', JSON.stringify(action.payload.cars));
			}
		);
	},
});

export const asyncAddCars = createAsyncThunk(
	'cars/fetchListCars',
	async (): Promise<ICarsResponse> => {
		return await listCars();
	}
);

export const { addCars, selectCar } = carsSlice.actions;

export default carsSlice.reducer;
