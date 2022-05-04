import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import carsSlice from './cars-slice';

const store = configureStore({
	reducer: {
		cars: carsSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ThunkConfig = { state: RootState; dipatch: AppDispatch };

export type AppThunk = ThunkAction<void, RootState, null, Action<any>>;

export default store;
