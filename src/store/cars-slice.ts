import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ICarsResponse } from '@shared/interfaces';

import { carsServices } from '@shared/services';

import { CarsSlice } from '@shared/types';

const { listCars } = carsServices();

const initialCarsState: CarsSlice = {
	list: [],
	currentCar: {
		id: 0,
		model: '',
		brand: '',
		price: 0,
		period: '',
		brand_logo: '',
		cover_photo: '',
		photos: [],
	},
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

	extraReducers: (builder) => {
		builder.addCase(
			asyncAddCars.fulfilled,
			(state, action: PayloadAction<ICarsResponse>) => {
				state.list = action.payload.cars;
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
