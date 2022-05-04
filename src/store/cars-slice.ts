import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICar, ICarsResponse } from '@shared/interfaces';

import { carsServices } from '@shared/services';

import { CarsSlice } from '@shared/types';

import { ThunkConfig } from '.';

const { listCars } = carsServices();

const initialCarsState: CarsSlice = {
	list: [],
	currentCar: {},
};

const carsSlice = createSlice({
	name: 'cars',

	initialState: initialCarsState,

	reducers: {
		addCars: (state, action: PayloadAction<ICarsResponse>) => {
			state.list = action.payload.cars;
		},

		selectCar: (state, action: PayloadAction<number>) => {
			state.currentCar = state.list.find((car) => car.id === action.payload)!;
		},
	},
});

export const asyncAddCars = createAsyncThunk<ICarsResponse, void, ThunkConfig>(
	'cars/fetchListCars',
	async (_, ThunkAPI) => {
		const response = await listCars();
		ThunkAPI.dispatch(addCars(response));
		return response;
	}
);

export const { addCars, selectCar } = carsSlice.actions;

export default carsSlice.reducer;
