import { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';

import RoutesContainer from '@routes';

import { useAppDispatch } from '@hooks';

import { asyncAddCars } from '@store/cars-slice';

import { theme, GlobalStyle } from '@shared/styles';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const fetchCars = async () => {
			await dispatch(asyncAddCars());
		};

		fetchCars();
	}, [dispatch]);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<RoutesContainer />
		</ThemeProvider>
	);
}

export default App;
