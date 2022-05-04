import React, { memo } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import Button from '../../../UI/Buttons/Button';
import Icon from '../../../UI/Icon';

import arrowLeft from '@assets/arrow_left.svg';
import arrowRight from '@assets/arrow_right.svg';

import { CarSliderProps } from '@shared/types';

import { CarSliderContainer, SliderItem } from './styles';

import { theme } from '@shared/styles';

import 'swiper/css';
import 'swiper/css/navigation';

const CarSlider = ({ models, onChangeModelColor }: CarSliderProps) => {
	return (
		<CarSliderContainer>
			<Button
				width={2}
				height={2}
				backgroundColor={theme.colors.grey08}
				borderRadius={30}
				className='button-previous'>
				<Icon iconSrc={arrowLeft} />
			</Button>

			<Swiper
				modules={[Navigation]}
				slidesPerView={3}
				loop={true}
				centeredSlides={true}
				centeredSlidesBounds={true}
				onSlideChange={({ realIndex }) => onChangeModelColor(realIndex)}
				navigation={{
					prevEl: '.button-previous',
					nextEl: '.button-next',
				}}>
				{models.map(({ id, photo }) => (
					<SwiperSlide key={id}>
						<SliderItem>
							<img src={photo} />
						</SliderItem>
					</SwiperSlide>
				))}
			</Swiper>

			<Button
				width={2}
				height={2}
				backgroundColor={theme.colors.grey08}
				borderRadius={30}
				className='button-next'>
				<Icon iconSrc={arrowRight} />
			</Button>
		</CarSliderContainer>
	);
};

export default CarSlider;
