import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CarDetails, Header } from '@components';

import { useAppDispatch, useAppSelector } from '@hooks';

import { selectCar } from '@store/cars-slice';

import { Container } from '@shared/styles';

const Details = (): JSX.Element => {
	const currentCar = useAppSelector((state) => state.cars.currentCar);
	const dispatch = useAppDispatch();

	const { id } = useParams();

	useEffect(() => {
		const fetchSelectCar = async () => {
			await dispatch(selectCar(+id!));
		};

		fetchSelectCar()
	}, [id]);

	return (
		<Container>
			<Header />
			<CarDetails currentCar={currentCar} />
		</Container>
	);
};

export default Details;
