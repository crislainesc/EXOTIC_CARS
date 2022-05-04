import React from 'react';

import ButtonMore from '../../../UI/Buttons/ButtonMore';

import { CarItemProps } from '@shared/types';

import { Text } from '@shared/styles';

import {
	CarItemContainer,
	CarItemImage,
	CarItemInfo,
	CarItemPriceAndPeriod,
} from './styles';

const CarItem = ({
	model,
	brand,
	price,
	period,
	cover_photo,
	onClickHandler,
}: CarItemProps): JSX.Element => {

	return (
		<CarItemContainer onClick={onClickHandler}>
			<CarItemInfo>
				<Text fontSize={1.06} fontWeight='700'>
					{brand}
				</Text>
				<ButtonMore />
				<Text fontSize={1.06} fontWeight='400'>
					{model.toUpperCase()}
				</Text>
			</CarItemInfo>
			<CarItemImage>
				<img src={cover_photo} alt={model} />
			</CarItemImage>
			<CarItemPriceAndPeriod>
				<a onClick={onClickHandler}>Book Now</a>
				<div>
					<Text fontSize={1.5} fontWeight='700'>
						{price}
					</Text>
					/
					<Text fontSize={0.8} fontWeight='500'>
						{period}
					</Text>
				</div>
			</CarItemPriceAndPeriod>
		</CarItemContainer>
	);
};

export default CarItem;
