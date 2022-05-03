import React from 'react';
import { useNavigate } from 'react-router-dom';

import CarItem from './CarItem';

import { useAppDispatch } from '@hooks';

import { ICar, ICarsResponse } from '@shared/interfaces';

import { selectCar } from '@store/cars-slice';

import { CarsListContainer } from './styles';

const CarsList = ({ cars }: ICarsResponse): JSX.Element => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const carOnClickHandler = (id: number, model: string) => {
		dispatch(selectCar(id));
		navigate(`/details/${id}/${model}`);
	};

	return (
		<CarsListContainer>
			{cars.map((car) => (
				<CarItem
					id={car.id}
					key={car.id}
					model={car.model}
					brand={car.brand}
					price={car.price}
					period={car.period}
					cover_photo={car.cover_photo}
					onClickHandler={carOnClickHandler.bind(this, car.id, car.model)}
				/>
			))}
		</CarsListContainer>
	);
};

export default CarsList;
