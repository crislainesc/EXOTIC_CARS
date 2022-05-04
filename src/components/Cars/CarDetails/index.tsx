import React, { memo, useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import CarSlider from './CarSlider';
import Button from '../../UI/Buttons/Button';

import { CarDetailsProps } from '@shared/types';

import { formatValueToCurrency } from '@shared/utils';

import { Text, theme } from '@shared/styles';

import {
	CarDetailsContainer,
	CarDetailsModelCarImage,
	CarDetailsModelColor,
	CarDetailsModelContainer,
	CarDetailsModelInfo,
} from './styles';

const CarDetails = ({ currentCar }: CarDetailsProps): JSX.Element => {
	const [modelColorIndex, setModelColorIndex] = useState(0);
	const navigate = useNavigate();

	const models = useMemo(() => currentCar.photos.map((car, index) => {
		console.log('models', { id: index, photo: car.photo })
		return { id: index, photo: car.photo };
	}), []);

	const changeModelColorIndexHandler = useCallback((index: number) => {
		setModelColorIndex(index);
	}, []);

	const goToCatalogHandler = () => {
		navigate('/');
	};

	return (
		<CarDetailsContainer>
			<CarDetailsModelContainer>
				<CarDetailsModelInfo>
					<img src={currentCar.brand_logo} />
					<Text fontSize={2} fontWeight='700'>
						{currentCar.brand} {currentCar.model}
					</Text>
					<Text fontSize={1.5} fontWeight='300'>
						{formatValueToCurrency(currentCar.price)}/{currentCar.period}
					</Text>
					<CarDetailsModelColor>
						<Text fontSize={3} fontWeight='700'>
							0{modelColorIndex + 1}
						</Text>
						<Text fontSize={1.8} fontWeight='300'>
							{currentCar.photos[modelColorIndex].color}
						</Text>
					</CarDetailsModelColor>
				</CarDetailsModelInfo>
				<CarDetailsModelCarImage>
					<Button
						width={9}
						height={2.3}
						backgroundColor={theme.colors.white02}
						borderRadius={25}
						borderColor={theme.colors.grey08}
						borderWidth={1}
						onClick={goToCatalogHandler}
						className='button-left'>
						<Text fontSize={0.8} fontWeight='300'>
							<AiOutlineArrowLeft />
							Back to catalog
						</Text>
					</Button>
					<div>
						<img src={currentCar.photos[modelColorIndex].photo} />
						<Button
							width={9}
							height={2.3}
							backgroundColor={theme.colors.grey08}
							borderRadius={25}>
							<Text
								fontSize={0.8}
								fontWeight='300'
								color={theme.colors.white01}>
								Book now
								<AiOutlineArrowRight />
							</Text>
						</Button>
					</div>
				</CarDetailsModelCarImage>
			</CarDetailsModelContainer>

			<CarSlider
				models={models}
				currentIndex={modelColorIndex}
				onChangeModelColor={changeModelColorIndexHandler}
			/>
		</CarDetailsContainer>
	);
};

export default memo(CarDetails);
