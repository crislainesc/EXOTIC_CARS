import React, { MouseEventHandler } from 'react';

import { ICar } from '@shared/interfaces';

export type ButtonProps = {
	width: number;
	height: number;
	backgroundColor: string;
	borderColor?: string;
	borderWidth?: number;
	borderRadius?: number;
	children: React.ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
};

export type CarItemProps = {
	id: number;
	model: string;
	brand: string;
	price: number;
	period: string;
	cover_photo: string;
	onClickHandler: MouseEventHandler<HTMLAnchorElement | HTMLDivElement>;
};

export type CarDetailsProps = {
	currentCar: ICar;
};

export type CarSlide = {
	id: number;
	photo: string;
};

export type CarSliderProps = {
	models: CarSlide[];
	onChangeModelColor: (index: number) => void;
	currentIndex: number;
};

export type CarsSlice = {
	list: Array<ICar>;
	currentCar: ICar | any;
};
